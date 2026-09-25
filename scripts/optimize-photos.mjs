/**
 * Resizes and recompresses every *new or changed* photo in public/photos/ in
 * place (keeping each file's original name/extension), then generates two
 * smaller responsive variants of each — "-480w" and "-960w" — plus a
 * generated TypeScript manifest of every variant's real pixel width, so
 * components can build `srcset` attributes instead of always shipping the
 * full ~2000px image even when it's displayed at a fraction of that size
 * (e.g. in the photo grid).
 *
 * Already-optimized photos are skipped on subsequent runs (tracked via
 * photo-optimize-cache.json, keyed by each file's on-disk size right after
 * it was last optimized) — otherwise every run would both waste time
 * reprocessing the whole folder and generation-loss-recompress every JPEG
 * a little more each time. Pass --force to bypass the cache and reprocess
 * everything anyway (e.g. after changing the quality/size constants below).
 *
 * Run after adding new photos: `npm run optimize-photos`
 */
import { readFile, readdir, rename, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const projectRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const photosDir = path.join(projectRoot, 'public', 'photos');
const manifestPath = path.join(projectRoot, 'src', 'app', 'data', 'photo-widths.generated.ts');
const cachePath = path.join(projectRoot, 'scripts', 'photo-optimize-cache.json');

const maxDimensionPx = 2000;
const responsiveTiers = [480, 960];
const jpegQuality = 78;
const webpQuality = 78;
const pngCompressionLevel = 9;

const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];
const forceReprocessAll = process.argv.includes('--force');

/**
 * Matches a filename this script itself generated as a responsive tier, e.g.
 * "foo-480w.jpg". Without excluding these from the source scan, a previously
 * generated tier file gets treated as a brand-new source photo on the next
 * run and gets its own "-480w"/"-960w" tiers generated FROM it — silently
 * producing garbage like "foo-960w-480w.jpg" that multiplies every run.
 */
const isGeneratedTierFile = (fileName) =>
  new RegExp(`-(${responsiveTiers.join('|')})w\\.[a-z0-9]+$`, 'i').test(fileName);

function formatBytes(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function loadCache() {
  try {
    return JSON.parse(await readFile(cachePath, 'utf-8'));
  } catch (error) {
    if (error.code === 'ENOENT') {
      return {};
    }
    throw error;
  }
}

function writeCache(cache) {
  const sortedEntries = Object.fromEntries(
    Object.entries(cache).sort(([a], [b]) => a.localeCompare(b)),
  );
  return writeFile(cachePath, `${JSON.stringify(sortedEntries, null, 2)}\n`, 'utf-8');
}

/**
 * Windows can transiently hold a lock on a just-written file (antivirus
 * scanning it, a lingering handle from the read above), which makes an
 * immediate rename-over-existing fail with EPERM. Deleting the destination
 * first — with a few retries — is more reliable there than a plain rename.
 */
async function replaceFile(tempFilePath, destinationPath, attempts = 10) {
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      await unlink(destinationPath).catch((error) => {
        if (error.code !== 'ENOENT') {
          throw error;
        }
      });
      await rename(tempFilePath, destinationPath);
      return;
    } catch (error) {
      if (attempt === attempts) {
        throw error;
      }
      await sleep(250 * attempt);
    }
  }
}

function applyFormat(pipeline, extension) {
  if (extension === '.jpg' || extension === '.jpeg') {
    return pipeline.jpeg({ quality: jpegQuality, mozjpeg: true });
  }
  if (extension === '.png') {
    return pipeline.png({ compressionLevel: pngCompressionLevel });
  }
  if (extension === '.webp') {
    return pipeline.webp({ quality: webpQuality });
  }
  return pipeline;
}

async function writeBufferReplacing(buffer, destinationPath) {
  // Write the already-encoded buffer verbatim — piping it through another
  // sharp(buffer).toFile() would silently re-decode and re-encode it with
  // libvips' default settings (not our quality/mozjpeg options), producing
  // a different byte size than `buffer.length` every time and adding an
  // extra, pointless generation-loss pass on top of the real one above.
  const tempFilePath = `${destinationPath}.optimizing.tmp`;
  await writeFile(tempFilePath, buffer);
  await replaceFile(tempFilePath, destinationPath);
}

/** Resizes+recompresses the full-size file in place; returns its real width, final on-disk size, and the rotated source buffer for reuse. */
async function optimizeFullSize(filePath, extension) {
  const originalFileBuffer = await readFile(filePath);
  const originalBytes = originalFileBuffer.length;

  // .rotate() with no args bakes in the EXIF orientation so every resize
  // below (and every browser rendering the final files) doesn't need to
  // reinterpret it. Reusing this single rotated buffer for every tier also
  // avoids re-reading/re-rotating the source once per tier.
  const rotatedBuffer = await sharp(originalFileBuffer).rotate().toBuffer();

  const fullBuffer = await applyFormat(
    sharp(rotatedBuffer).resize({
      width: maxDimensionPx,
      height: maxDimensionPx,
      fit: 'inside',
      withoutEnlargement: true,
    }),
    extension,
  ).toBuffer();

  const keepsOriginal = fullBuffer.length >= originalBytes;
  if (!keepsOriginal) {
    await writeBufferReplacing(fullBuffer, filePath);
  }

  const fullWidth = (await sharp(fullBuffer).metadata()).width;
  const finalOnDiskBytes = keepsOriginal ? originalBytes : fullBuffer.length;
  return {
    rotatedBuffer,
    fullWidth,
    finalOnDiskBytes,
    savedBytes: originalBytes - finalOnDiskBytes,
  };
}

/** Writes a "-{tierWidth}w" variant if the source is wider than that tier (skips pointless upscale-avoided duplicates). */
async function writeResponsiveTier(rotatedBuffer, fullWidth, tierWidth, filePath, extension) {
  if (fullWidth <= tierWidth) {
    return null;
  }

  const tierBuffer = await applyFormat(
    sharp(rotatedBuffer).resize({ width: tierWidth, withoutEnlargement: true }),
    extension,
  ).toBuffer();

  const parsedPath = path.parse(filePath);
  const tierPath = path.join(parsedPath.dir, `${parsedPath.name}-${tierWidth}w${parsedPath.ext}`);
  await writeBufferReplacing(tierBuffer, tierPath);
  return (await sharp(tierBuffer).metadata()).width;
}

async function optimizeOne(fileName) {
  const filePath = path.join(photosDir, fileName);
  const extension = path.extname(fileName).toLowerCase();

  const { rotatedBuffer, fullWidth, finalOnDiskBytes, savedBytes } = await optimizeFullSize(
    filePath,
    extension,
  );

  const widths = { full: fullWidth };
  for (const tierWidth of responsiveTiers) {
    const actualWidth = await writeResponsiveTier(rotatedBuffer, fullWidth, tierWidth, filePath, extension);
    if (actualWidth) {
      widths[tierWidth] = actualWidth;
    }
  }

  return { fileName, savedBytes, widths, finalOnDiskBytes };
}

function writeManifest(widthsByFileName) {
  const entries = Object.entries(widthsByFileName)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([fileName, widths]) => `  '${fileName}': ${JSON.stringify(widths)},`)
    .join('\n');

  const contents = `/**
 * Generated by scripts/optimize-photos.mjs — do not edit by hand.
 * Maps each photo's base filename to the real pixel width of its full-size
 * file and each responsive tier ("-480w"/"-960w") that was actually
 * generated for it (narrower source photos may not have every tier).
 */
export interface PhotoWidths {
  readonly full: number;
  readonly 480?: number;
  readonly 960?: number;
}

export const photoWidths: Readonly<Record<string, PhotoWidths>> = {
${entries}
};
`;

  return writeFile(manifestPath, contents, 'utf-8');
}

async function main() {
  const cache = forceReprocessAll ? {} : await loadCache();
  const entries = (await readdir(photosDir)).filter(
    (fileName) =>
      SUPPORTED_EXTENSIONS.includes(path.extname(fileName).toLowerCase()) &&
      !isGeneratedTierFile(fileName),
  );

  let totalSaved = 0;
  let processedCount = 0;
  let skippedCount = 0;
  const failures = [];
  const widthsByFileName = {};
  const updatedCache = {};

  for (const fileName of entries) {
    const currentBytes = (await readFile(path.join(photosDir, fileName))).length;
    const cached = cache[fileName];

    if (cached && cached.size === currentBytes) {
      widthsByFileName[fileName] = cached.widths;
      updatedCache[fileName] = cached;
      skippedCount += 1;
      continue;
    }

    let result;
    try {
      result = await optimizeOne(fileName);
    } catch (error) {
      console.error(`${fileName}: FAILED (${error.message})`);
      failures.push(fileName);
      continue;
    }

    totalSaved += result.savedBytes;
    processedCount += 1;
    widthsByFileName[fileName] = result.widths;
    updatedCache[fileName] = { size: result.finalOnDiskBytes, widths: result.widths };

    const tierList = Object.keys(result.widths)
      .filter((key) => key !== 'full')
      .map((key) => `${key}w`)
      .join(', ');
    console.log(`${fileName}: full=${result.widths.full}px, tiers=[${tierList || 'none'}]`);
  }

  await writeManifest(widthsByFileName);
  await writeCache(updatedCache);

  console.log('---');
  console.log(`${processedCount} photos processed, ${skippedCount} already up to date (skipped)`);
  console.log(`Saved ${formatBytes(totalSaved)} on full-size recompression`);
  console.log(`Manifest written to ${path.relative(projectRoot, manifestPath)}`);
  if (failures.length > 0) {
    console.log(`Failed (re-run the script to retry these): ${failures.join(', ')}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
