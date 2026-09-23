import { Injectable, signal } from '@angular/core';

/** The photo currently shown in the full-screen lightbox, or null when closed. */
export interface OpenLightboxPhoto {
  readonly imageSource: string;
  readonly altText: string;
}

/**
 * Shares lightbox open/closed state between every `PhotoCollageSectionComponent`
 * (which can open it) and the single `PhotoLightboxComponent` (which renders it).
 */
@Injectable({ providedIn: 'root' })
export class LightboxService {
  private readonly openPhotoSignal = signal<OpenLightboxPhoto | null>(null);

  readonly openPhoto = this.openPhotoSignal.asReadonly();

  open(imageSource: string, altText: string): void {
    this.openPhotoSignal.set({ imageSource, altText });
  }

  close(): void {
    this.openPhotoSignal.set(null);
  }
}
