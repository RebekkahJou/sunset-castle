import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImageSkeletonDirective } from '../../directives/image-skeleton.directive';
import {
  houseAddress,
  welcomeIntroImageAltText,
  welcomeIntroImageFileName,
  welcomeIntroText,
} from '../../data/site-content.data';
import { buildPhotoSrcset, photoPath } from '../../utils/photo-srcset';

@Component({
  selector: 'app-welcome-intro',
  standalone: true,
  imports: [ImageSkeletonDirective],
  templateUrl: './welcome-intro.component.html',
  styleUrl: './welcome-intro.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeIntroComponent {
  protected readonly welcomeIntroText = welcomeIntroText;
  protected readonly houseAddress = houseAddress;
  protected readonly welcomeIntroImageAltText = welcomeIntroImageAltText;
  protected readonly welcomeIntroImageSrc = photoPath(welcomeIntroImageFileName);
  protected readonly welcomeIntroImageSrcset = buildPhotoSrcset(welcomeIntroImageFileName);
}
