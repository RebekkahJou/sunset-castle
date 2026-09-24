/** A recipe card: shown alone in the modal, or as one "slide" inside a marquee. */
export interface RecipeContent {
  readonly title: string;
  readonly description?: string;
  readonly ingredients: readonly string[];
  readonly instructions: readonly string[];
}

/** A photo shown as one slide of a `MarqueeContent`. */
export interface MarqueePhotoItem {
  readonly kind: 'photo';
  readonly fileName: string;
  readonly altText: string;
  readonly caption?: string;
}

/** A recipe shown as one slide of a `MarqueeContent`, mixed in among photos. */
export interface MarqueeRecipeItem {
  readonly kind: 'recipe';
  readonly recipe: RecipeContent;
}

export type MarqueeItem = MarqueePhotoItem | MarqueeRecipeItem;

/** A horizontally auto-scrolling strip of photos and/or recipe cards. */
export interface MarqueeContent {
  readonly kind: 'marquee';
  readonly title: string;
  readonly items: readonly MarqueeItem[];
}

/** A single recipe shown by itself in the modal. */
export interface RecipeModalContent {
  readonly kind: 'recipe';
  readonly recipe: RecipeContent;
}

/** Additional material shown in the modal when a photo is clicked. */
export type ModalContent = RecipeModalContent | MarqueeContent;
