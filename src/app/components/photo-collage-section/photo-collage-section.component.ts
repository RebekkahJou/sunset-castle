import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CollagePhoto } from '../../models/collage-photo.model';
import { ContentSection } from '../../models/content-section.model';
import { LightboxService } from '../../services/lightbox.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-photo-collage-section',
  standalone: true,
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

  photoPath(fileName: string): string {
    return `photos/${fileName}`;
  }

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
    const clickedImage = event.target as HTMLImageElement;
    if (clickedImage.classList.contains('is-missing')) {
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

    this.lightboxService.open(this.photoPath(photo.fileName), photo.altText);
  }

  onImageLoadError(event: Event, fallbackLabel: string): void {
    const failedImage = event.target as HTMLImageElement;
    failedImage.classList.add('is-missing');
    failedImage.removeAttribute('src');
    failedImage.alt = fallbackLabel;
  }
}
