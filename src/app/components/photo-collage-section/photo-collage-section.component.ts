import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ContentSection } from '../../models/content-section.model';
import { LightboxService } from '../../services/lightbox.service';

/**
 * Renders one full-width page section: a heading, an optional intro paragraph,
 * and a tilted photo-collage grid. Reused for every collage section on the page
 * (Parks & Nature, Food & Local Spots, Seasons & Local Events, etc.) so that
 * section content lives entirely in `site-content.data.ts` rather than markup.
 */
@Component({
  selector: 'app-photo-collage-section',
  standalone: true,
  templateUrl: './photo-collage-section.component.html',
  styleUrl: './photo-collage-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoCollageSectionComponent {
  readonly section = input.required<ContentSection>();

  constructor(private readonly lightboxService: LightboxService) {}

  photoPath(fileName: string): string {
    return `photos/${fileName}`;
  }

  openLightbox(event: MouseEvent, imageSource: string, altText: string): void {
    const clickedImage = event.target as HTMLImageElement;
    if (clickedImage.classList.contains('is-missing')) {
      return;
    }
    this.lightboxService.open(imageSource, altText);
  }

  onImageLoadError(event: Event, fallbackLabel: string): void {
    const failedImage = event.target as HTMLImageElement;
    failedImage.classList.add('is-missing');
    failedImage.removeAttribute('src');
    failedImage.alt = fallbackLabel;
  }
}
