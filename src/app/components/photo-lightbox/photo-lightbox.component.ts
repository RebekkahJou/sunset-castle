import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { ImageSkeletonDirective } from '../../directives/image-skeleton.directive';
import { LightboxService } from '../../services/lightbox.service';
import { buildPhotoSrcset, photoPath } from '../../utils/photo-srcset';

@Component({
  selector: 'app-photo-lightbox',
  standalone: true,
  imports: [ImageSkeletonDirective],
  templateUrl: './photo-lightbox.component.html',
  styleUrl: './photo-lightbox.component.css',
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
export class PhotoLightboxComponent {
  protected readonly openPhoto;

  constructor(private readonly lightboxService: LightboxService) {
    this.openPhoto = this.lightboxService.openPhoto;
  }

  protected readonly photoPath = photoPath;
  protected readonly buildPhotoSrcset = buildPhotoSrcset;

  close(): void {
    this.lightboxService.close();
  }

  @HostListener('document:keydown.escape')
  onEscapeKeyPressed(): void {
    this.close();
  }
}
