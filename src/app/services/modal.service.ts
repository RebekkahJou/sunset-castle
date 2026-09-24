import { Injectable, signal } from '@angular/core';
import { ModalContent } from '../models/modal-content.model';

/**
 * Shares modal open/closed state between every `PhotoCollageSectionComponent`
 * (which can open it with a photo's `modalContent`) and the single `ModalComponent`
 * (which renders it). Mirrors `LightboxService`.
 */
@Injectable({ providedIn: 'root' })
export class ModalService {
  private readonly contentSignal = signal<ModalContent | null>(null);

  readonly content = this.contentSignal.asReadonly();

  open(content: ModalContent): void {
    this.contentSignal.set(content);
  }

  close(): void {
    this.contentSignal.set(null);
  }
}
