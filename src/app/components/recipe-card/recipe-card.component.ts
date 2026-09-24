import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RecipeContent } from '../../models/modal-content.model';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeCardComponent {
  readonly recipe = input.required<RecipeContent>();
}
