import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { ImageSkeletonDirective } from '../../directives/image-skeleton.directive';
import { MarqueeItem } from '../../models/modal-content.model';
import { ModalService } from '../../services/modal.service';
import { buildPhotoSrcset, photoPath } from '../../utils/photo-srcset';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [RecipeCardComponent, ImageSkeletonDirective],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeScaleIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('180ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('140ms ease-in', style({ opacity: 0 }))]),
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ transform: 'scale(0.94)' }),
        animate('200ms cubic-bezier(0.22, 1, 0.36, 1)', style({ transform: 'scale(1)' })),
      ]),
    ]),
  ],
})
export class ModalComponent {
  protected readonly content;
  protected readonly isMarqueePaused = signal(false);

  constructor(private readonly modalService: ModalService) {
    this.content = this.modalService.content;
  }

  close(): void {
    this.modalService.close();
  }

  pauseMarquee(): void {
    this.isMarqueePaused.set(true);
  }

  resumeMarquee(): void {
    this.isMarqueePaused.set(false);
  }

  protected readonly photoPath = photoPath;
  protected readonly buildPhotoSrcset = buildPhotoSrcset;

  /** Duplicates the marquee items once so the CSS scroll animation can loop seamlessly. */
  loopedMarqueeItems(items: readonly MarqueeItem[]): readonly MarqueeItem[] {
    return [...items, ...items];
  }

  @HostListener('document:keydown.escape')
  onEscapeKeyPressed(): void {
    this.close();
  }
}
