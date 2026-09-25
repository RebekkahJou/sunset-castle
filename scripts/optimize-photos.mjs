/**
 * Resizes and recompresses photos in public/photos/ in place (keeping each
 * file's original name/extension), then generates two smaller responsive
 * variants of each — "-480w" and "-960w" — plus a generated TypeScript
 * manifest of every variant's real pixel width, so components can build
 * `srcset` attributes instead of always shipping the full ~2000px image even
 * when it's displayed at a fraction of that size (e.g. in the photo grid).
 *
 * Usage:
 *   npm run optimize-photos                     # process every new/changed photo
 *   npm run optimize-photos -- foo.jpg bar.png   # process only the named photos
 *   npm run optimize-photos -- --force           # reprocess everything, ignoring the cache
 *   npm run optimize-photos -- foo.jpg --force   # reprocess just foo.jpg even if cached
 *
 * Already-processed photos are skipped on later runs, tracked by filename (not
 * file size — two unrelated photos can easily share a byte size, which would
 * make a size-based cache misidentify one as "already optimized") in
 * photo-optimize-cache.json. That cache also records every "-480w"/"-960w"
 * tier file this script has generated, so a full (no-args) run never mistakes
 * its own previous output for a new source photo — which otherwise silently
 * multiplies into garbage like "foo-960w-480w.jpg" every run.
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

const cliArgs = process.argv.slice(2);
const forceReprocess = cliArgs.includes('--force');
const explicitFileNames = cliArgs.filter((arg) => arg !== '--force');

// Structural safety net alongside the cache's explicit `generatedFiles` list
// (belt-and-suspenders): matches this script's own "-480w"/"-960w" naming.
const looksLikeGeneratedTierFile = (fileName) =>
  new RegExp(`-(${responsiveTiers.join('|')})w\\.[a-z0-9]+$`, 'i').test(fileName);

function formatBytes(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function emptyCache() {
  return { photos: {}, generatedFiles: [] };
}

async function loadCache() {
  try {
    const parsed = JSON.parse(await readFile(cachePath, 'utf-8'));
    return { photos: parsed.photos ?? {}, generatedFiles: parsed.generatedFiles ?? [] };
  } catch (error) {
    if (error.code === 'ENOENT') {
      return emptyCache();
    }
    throw error;
  }
}

function writeCache(cache) {
  const sortedPhotos = Object.fromEntries(
    Object.entries(cache.photos).sort(([a], [b]) => a.localeCompare(b)),
  );
  const sortedGeneratedFiles = [...new Set(cache.generatedFiles)].sort((a, b) => a.localeCompare(b));
  const contents = { photos: sortedPhotos, generatedFiles: sortedGeneratedFiles };
  return writeFile(cachePath, `${JSON.stringify(contents, null, 2)}\n`, 'utf-8');
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

/** Resizes+recompresses the full-size file in place; returns its real width, byte savings, and the rotated source buffer for reuse. */
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
  return { rotatedBuffer, fullWidth, savedBytes: originalBytes - finalOnDiskBytes };
}

/** Writes a "-{tierWidth}w" variant if the source is wider than that tier (skips pointless upscale-avoided duplicates). Returns its generated filename and real width, or null. */
async function writeResponsiveTier(rotatedBuffer, fullWidth, tierWidth, filePath, extension) {
  if (fullWidth <= tierWidth) {
    return null;
  }

  const tierBuffer = await applyFormat(
    sharp(rotatedBuffer).resize({ width: tierWidth, withoutEnlargement: true }),
    extension,
  ).toBuffer();

  const parsedPath = path.parse(filePath);
  const tierFileName = `${parsedPath.name}-${tierWidth}w${parsedPath.ext}`;
  await writeBufferReplacing(tierBuffer, path.join(parsedPath.dir, tierFileName));
  const width = (await sharp(tierBuffer).metadata()).width;
  return { tierFileName, width };
}

async function optimizeOne(fileName) {
  const filePath = path.join(photosDir, fileName);
  const extension = path.extname(fileName).toLowerCase();

  const { rotatedBuffer, fullWidth, savedBytes } = await optimizeFullSize(filePath, extension);

  const widths = { full: fullWidth };
  const generatedFileNames = [];
  for (const tierWidth of responsiveTiers) {
    const tier = await writeResponsiveTier(rotatedBuffer, fullWidth, tierWidth, filePath, extension);
    if (tier) {
      widths[tierWidth] = tier.width;
      generatedFileNames.push(tier.tierFileName);
    }
  }

  return { fileName, savedBytes, widths, generatedFileNames };
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

/** Every real source photo in the folder, excluding this script's own generated tier files. */
async function listAllSourcePhotos(cache) {
  const knownGeneratedFiles = new Set(cache.generatedFiles);
  const entries = await readdir(photosDir);
  return entries.filter(
    (fileName) =>
      SUPPORTED_EXTENSIONS.includes(path.extname(fileName).toLowerCase()) &&
      !knownGeneratedFiles.has(fileName) &&
      !looksLikeGeneratedTierFile(fileName),
  );
}

async function resolveCandidates(cache) {
  if (explicitFileNames.length === 0) {
    return { candidates: await listAllSourcePhotos(cache), missing: [] };
  }

  const candidates = [];
  const missing = [];
  for (const fileName of explicitFileNames) {
    try {
      await readFile(path.join(photosDir, fileName));
      candidates.push(fileName);
    } catch {
      missing.push(fileName);
    }
  }
  return { candidates, missing };
}

async function main() {
  const cache = await loadCache();
  const { candidates, missing } = await resolveCandidates(cache);

  // Seed with every previously known photo so photos outside this run's
  // scope (e.g. when explicit filenames were passed) still keep their
  // manifest entry instead of disappearing from it.
  const widthsByFileName = { ...cache.photos };
  const generatedFiles = new Set(cache.generatedFiles);

  let totalSaved = 0;
  let processedCount = 0;
  let skippedCount = 0;
  const failures = [...missing];

  for (const name of missing) {
    console.error(`${name}: FAILED (no such file in public/photos/)`);
  }

  for (const fileName of candidates) {
    if (!forceReprocess && cache.photos[fileName]) {
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
    result.generatedFileNames.forEach((name) => generatedFiles.add(name));

    const tierList = Object.keys(result.widths)
      .filter((key) => key !== 'full')
      .map((key) => `${key}w`)
      .join(', ');
    console.log(`${fileName}: full=${result.widths.full}px, tiers=[${tierList || 'none'}]`);
  }

  await writeManifest(widthsByFileName);
  await writeCache({ photos: widthsByFileName, generatedFiles: [...generatedFiles] });

  console.log('---');
  console.log(`${processedCount} photos processed, ${skippedCount} already up to date (skipped)`);
  console.log(`Saved ${formatBytes(totalSaved)} on full-size recompression`);
  console.log(`Manifest written to ${path.relative(projectRoot, manifestPath)}`);
  if (failures.length > 0) {
    console.log(`Failed: ${failures.join(', ')}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
