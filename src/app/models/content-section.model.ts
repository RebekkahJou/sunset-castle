import { CollagePhoto } from './collage-photo.model';

/** Named background palette used to alternate section colors down the page. */
export type SectionBackground = 'cream' | 'blush' | 'mint' | 'butter' | 'lavender';

/**
 * One photo-collage section of the page (e.g. "Parks & Nature").
 * Rendered by the reusable `PhotoCollageSectionComponent`.
 */
export interface ContentSection {
  /** Used as the section's DOM id and the nav link's URL fragment. */
  readonly id: string;
  /** Short label shown in the site navigation (may differ from `heading`). */
  readonly navLabel: string;
  /** Full heading displayed at the top of the section. */
  readonly heading: string;
  /** Optional italic intro paragraph shown under the heading. */
  readonly intro?: string;
  readonly background: SectionBackground;
  /** Whether to overlay the dotted confetti texture on this section. */
  readonly dotted?: boolean;
  /** Optional featured photo shown larger, above the regular grid. */
  readonly focalPhoto?: CollagePhoto;
  readonly photos: readonly CollagePhoto[];
}

/** A navigable link in the sticky site navigation. */
export interface NavLink {
  readonly id: string;
  readonly label: string;
}
