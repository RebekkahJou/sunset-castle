import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AgentContactCardComponent } from '../agent-contact-card/agent-contact-card.component';
import { listingDetails } from '../../data/site-content.data';

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [AgentContactCardComponent],
  templateUrl: './call-to-action.component.html',
  styleUrl: './call-to-action.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CallToActionComponent {
  protected readonly listingDetails = listingDetails;
}
