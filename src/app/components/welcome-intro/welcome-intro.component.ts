import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  houseAddress,
  welcomeIntroImageAltText,
  welcomeIntroImageFileName,
  welcomeIntroText,
} from '../../data/site-content.data';

@Component({
  selector: 'app-welcome-intro',
  standalone: true,
  templateUrl: './welcome-intro.component.html',
  styleUrl: './welcome-intro.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeIntroComponent {
  protected readonly welcomeIntroText = welcomeIntroText;
  protected readonly houseAddress = houseAddress;
  protected readonly welcomeIntroImageFileName = welcomeIntroImageFileName;
  protected readonly welcomeIntroImageAltText = welcomeIntroImageAltText;
}
