import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImageSkeletonDirective } from '../../directives/image-skeleton.directive';
import { heroImageAltText, heroImageFileName } from '../../data/site-content.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ImageSkeletonDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  protected readonly heroImageFileName = heroImageFileName;
  protected readonly heroImageAltText = heroImageAltText;
}
