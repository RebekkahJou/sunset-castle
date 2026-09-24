import { ModalContent } from './modal-content.model';

/**
 * A single photo shown inside a `PhotoCollageSectionComponent` grid.
 *
 * A photo may optionally carry exactly one of `externalLink` or `modalContent`:
 * - `externalLink` opens the URL in a new tab instead of the lightbox.
 * - `modalContent` opens the shared modal (a recipe or a marquee) instead of the lightbox.
 * A photo with neither behaves as before, opening in the full-screen lightbox.
 */
export interface CollagePhoto {
  /** File name inside `public/photos/`, e.g. "house-front-tulips-spring.jpg". */
  readonly fileName: string;
  /** Accessible description of the photo's contents. */
  readonly altText: string;
  /** Short caption shown beneath the photo. */
  readonly caption: string;
  /** Text shown in place of the photo if the image fails to load. */
  readonly fallbackLabel: string;
  /** External URL to open in a new tab when this photo is clicked. */
  readonly externalLink?: string;
  /** Additional material (recipe, marquee, etc.) to show in the modal when clicked. */
  readonly modalContent?: ModalContent;
}
