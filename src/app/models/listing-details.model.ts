/**
 * Pointer to the official real-estate listing and its agent, shown in the
 * closing call-to-action. This page is a lifestyle companion piece, not the
 * listing itself — full specs (price, beds/baths, floor plans, tour) live
 * on `listingUrl`.
 */
export interface ListingDetails {
  readonly listingUrl: string;
  readonly agentName: string;
  readonly agentBrokerage: string;
  readonly agentPhone: string;
}
