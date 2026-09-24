import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ImageSkeletonDirective } from '../../directives/image-skeleton.directive';
import { CollagePhoto } from '../../models/collage-photo.model';
import { ContentSection } from '../../models/content-section.model';
import { LightboxService } from '../../services/lightbox.service';
import { ModalService } from '../../services/modal.service';
import { buildPhotoSrcset, photoPath } from '../../utils/photo-srcset';

@Component({
  selector: 'app-photo-collage-section',
  standalone: true,
  imports: [ImageSkeletonDirective],
  templateUrl: './photo-collage-section.component.html',
  styleUrl: './photo-collage-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoCollageSectionComponent {
  readonly section = input.required<ContentSection>();

  constructor(
    private readonly lightboxService: LightboxService,
    private readonly modalService: ModalService,
  ) {}

  protected readonly photoPath = photoPath;
  protected readonly buildPhotoSrcset = buildPhotoSrcset;

  /** True for photos that navigate away or open the modal — styled like a link. */
  isLinkStyled(photo: CollagePhoto): boolean {
    return Boolean(photo.externalLink || photo.modalContent);
  }

  ariaLabelFor(photo: CollagePhoto): string {
    if (photo.externalLink) {
      return `Visit link: ${photo.caption}`;
    }
    if (photo.modalContent) {
      return `Open additional material: ${photo.caption}`;
    }
    return `Enlarge photo: ${photo.caption}`;
  }

  onPhotoActivated(event: MouseEvent, photo: CollagePhoto): void {
    const activatedButton = event.currentTarget as HTMLElement;
    const image = activatedButton.querySelector('img');
    if (image?.classList.contains('is-missing')) {
      return;
    }

    if (photo.externalLink) {
      window.open(photo.externalLink, '_blank', 'noopener');
      return;
    }

    if (photo.modalContent) {
      this.modalService.open(photo.modalContent);
      return;
    }

    this.lightboxService.open(photo.fileName, photo.altText);
  }

  onImageLoadError(event: Event, fallbackLabel: string): void {
    const failedImage = event.target as HTMLImageElement;
    failedImage.classList.add('is-missing');
    failedImage.removeAttribute('src');
    failedImage.alt = fallbackLabel;
  }
}
