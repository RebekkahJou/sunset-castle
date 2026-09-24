/**
 * Resizes and recompresses every photo in public/photos/ in place (keeping
 * each file's original name/extension), then generates two smaller responsive
 * variants of each — "-480w" and "-960w" — plus a generated TypeScript
 * manifest of every variant's real pixel width, so components can build
 * `srcset` attributes instead of always shipping the full ~2000px image even
 * when it's displayed at a fraction of that size (e.g. in the photo grid).
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

const maxDimensionPx = 2000;
const responsiveTiers = [480, 960];
const jpegQuality = 78;
const webpQuality = 78;
const pngCompressionLevel = 9;

const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

function formatBytes(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
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
  const tempFilePath = `${destinationPath}.optimizing.tmp`;
  await sharp(buffer).toFile(tempFilePath);
  await replaceFile(tempFilePath, destinationPath);
}

/** Resizes+recompresses the full-size file in place; returns its real width and the rotated source buffer for reuse. */
async function optimizeFullSize(fileName, filePath, extension) {
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

  if (fullBuffer.length < originalBytes) {
    await writeBufferReplacing(fullBuffer, filePath);
  }

  const fullWidth = (await sharp(fullBuffer).metadata()).width;
  return { rotatedBuffer, fullWidth, savedBytes: originalBytes - Math.min(fullBuffer.length, originalBytes) };
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
  if (!SUPPORTED_EXTENSIONS.includes(extension)) {
    return null;
  }

  const { rotatedBuffer, fullWidth, savedBytes } = await optimizeFullSize(fileName, filePath, extension);

  const widths = { full: fullWidth };
  for (const tierWidth of responsiveTiers) {
    const actualWidth = await writeResponsiveTier(rotatedBuffer, fullWidth, tierWidth, filePath, extension);
    if (actualWidth) {
      widths[tierWidth] = actualWidth;
    }
  }

  return { fileName, savedBytes, widths };
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
  const entries = await readdir(photosDir);
  let totalSaved = 0;
  let processedCount = 0;
  const failures = [];
  const widthsByFileName = {};

  for (const fileName of entries) {
    let result;
    try {
      result = await optimizeOne(fileName);
    } catch (error) {
      console.error(`${fileName}: FAILED (${error.message})`);
      failures.push(fileName);
      continue;
    }
    if (!result) {
      continue;
    }
    totalSaved += result.savedBytes;
    processedCount += 1;
    widthsByFileName[result.fileName] = result.widths;
    const tierList = Object.keys(result.widths)
      .filter((key) => key !== 'full')
      .map((key) => `${key}w`)
      .join(', ');
    console.log(`${result.fileName}: full=${result.widths.full}px, tiers=[${tierList || 'none'}]`);
  }

  await writeManifest(widthsByFileName);

  console.log('---');
  console.log(`${processedCount} photos processed`);
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
