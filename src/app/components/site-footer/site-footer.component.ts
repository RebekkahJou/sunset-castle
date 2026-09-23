import { ChangeDetectionStrategy, Component } from '@angular/core';
import { houseAddress } from '../../data/site-content.data';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooterComponent {
  protected readonly houseAddress = houseAddress;
  protected readonly currentYear = new Date().getFullYear();
}
