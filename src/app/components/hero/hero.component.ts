import { ChangeDetectionStrategy, Component } from '@angular/core';
import { heroImageAltText, heroImageFileName } from '../../data/site-content.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  protected readonly heroImageFileName = heroImageFileName;
  protected readonly heroImageAltText = heroImageAltText;
}
