/** A single photo shown inside a `PhotoCollageSectionComponent` grid. */
export interface CollagePhoto {
  /** File name inside `public/photos/`, e.g. "house-front-tulips-spring.jpg". */
  readonly fileName: string;
  /** Accessible description of the photo's contents. */
  readonly altText: string;
  /** Short caption shown beneath the photo. */
  readonly caption: string;
  /** Text shown in place of the photo if the image fails to load. */
  readonly fallbackLabel: string;
}
