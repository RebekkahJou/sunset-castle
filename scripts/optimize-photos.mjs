/**
 * Resizes and recompresses every photo in public/photos/ in place. Keeps each
 * file's original name and extension (so nothing in site-content.data.ts needs
 * to change) — only pixel dimensions and compression quality are reduced.
 *
 * Run after adding new photos: `npm run optimize-photos`
 */
import { readFile, readdir, rename, unlink } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const photosDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public', 'photos');
const maxDimensionPx = 2000;
const jpegQuality = 78;
const webpQuality = 78;
const pngCompressionLevel = 9;

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

async function optimizeOne(fileName) {
  const filePath = path.join(photosDir, fileName);
  const extension = path.extname(fileName).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(extension)) {
    return null;
  }

  // Read the whole file into memory up front (rather than sharp(filePath)
  // streaming/lazily opening it) so the source's file handle is fully closed
  // before we ever try to delete/replace that same path below — on Windows,
  // sharp's own lazy read handle otherwise isn't reliably released in time,
  // which made every unlink() below intermittently fail with EBUSY.
  const originalFileBuffer = await readFile(filePath);
  const originalBytes = originalFileBuffer.length;

  // .rotate() with no args bakes in the EXIF orientation so the resize below
  // (and every browser rendering the final file) doesn't need to reinterpret it.
  let pipeline = sharp(originalFileBuffer)
    .rotate()
    .resize({
      width: maxDimensionPx,
      height: maxDimensionPx,
      fit: 'inside',
      withoutEnlargement: true,
    });

  if (extension === '.jpg' || extension === '.jpeg') {
    pipeline = pipeline.jpeg({ quality: jpegQuality, mozjpeg: true });
  } else if (extension === '.png') {
    pipeline = pipeline.png({ compressionLevel: pngCompressionLevel });
  } else if (extension === '.webp') {
    pipeline = pipeline.webp({ quality: webpQuality });
  }

  const optimizedBuffer = await pipeline.toBuffer();

  if (optimizedBuffer.length < originalBytes) {
    // Writing straight back to filePath fails on Windows (the read handle from
    // above can still be held); write to a sibling temp file and swap it in instead.
    const tempFilePath = `${filePath}.optimizing.tmp`;
    await sharp(optimizedBuffer).toFile(tempFilePath);
    await replaceFile(tempFilePath, filePath);
    return { fileName, originalBytes, optimizedBytes: optimizedBuffer.length };
  }

  return { fileName, originalBytes, optimizedBytes: originalBytes };
}

async function main() {
  const entries = await readdir(photosDir);
  let totalOriginal = 0;
  let totalOptimized = 0;
  let processedCount = 0;
  const failures = [];

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
    totalOriginal += result.originalBytes;
    totalOptimized += result.optimizedBytes;
    processedCount += 1;
    const savedPercent = (
      ((result.originalBytes - result.optimizedBytes) / result.originalBytes) *
      100
    ).toFixed(0);
    console.log(
      `${fileName}: ${formatBytes(result.originalBytes)} -> ${formatBytes(result.optimizedBytes)} (-${savedPercent}%)`,
    );
  }

  console.log('---');
  console.log(`${processedCount} photos processed`);
  console.log(`Total: ${formatBytes(totalOriginal)} -> ${formatBytes(totalOptimized)}`);
  if (failures.length > 0) {
    console.log(`Failed (re-run the script to retry these): ${failures.join(', ')}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
