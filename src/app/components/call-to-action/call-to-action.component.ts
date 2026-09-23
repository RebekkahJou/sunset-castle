import { ChangeDetectionStrategy, Component } from '@angular/core';
import { listingDetails } from '../../data/site-content.data';

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  templateUrl: './call-to-action.component.html',
  styleUrl: './call-to-action.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CallToActionComponent {
  protected readonly listingDetails = listingDetails;
}
