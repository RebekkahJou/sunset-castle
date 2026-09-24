import { photoWidths } from '../data/photo-widths.generated';

/** Path to a photo's full-size file inside public/photos/. */
export function photoPath(fileName: string): string {
  return `photos/${fileName}`;
}

function tierFileName(fileName: string, tierWidth: number): string {
  const dotIndex = fileName.lastIndexOf('.');
  const base = fileName.slice(0, dotIndex);
  const extension = fileName.slice(dotIndex);
  return `${base}-${tierWidth}w${extension}`;
}

export function buildPhotoSrcset(fileName: string): string {
  const widths = photoWidths[fileName];
  if (!widths) {
    return '';
  }

  const candidates: string[] = [];
  if (widths[480]) {
    candidates.push(`${photoPath(tierFileName(fileName, 480))} ${widths[480]}w`);
  }
  if (widths[960]) {
    candidates.push(`${photoPath(tierFileName(fileName, 960))} ${widths[960]}w`);
  }
  candidates.push(`${photoPath(fileName)} ${widths.full}w`);
  return candidates.join(', ');
}
