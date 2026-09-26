import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { listingDetails } from '../../data/site-content.data';

/**
 * Roger's contact block — name/title, brokerage logo, office/cell phone
 * numbers, and the Equal Housing Opportunity logo. Shown in both the welcome
 * section and the closing call-to-action, so it lives as one component
 * rather than being duplicated.
 */
@Component({
  selector: 'app-agent-contact-card',
  standalone: true,
  templateUrl: './agent-contact-card.component.html',
  styleUrl: './agent-contact-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgentContactCardComponent {
  /** "dark" for use on the accent-gradient CTA background; "light" (default) for the cream welcome section. */
  readonly variant = input<'light' | 'dark'>('light');

  protected readonly listingDetails = listingDetails;
}
