import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { navLinks } from '../../data/site-content.data';

@Component({
  selector: 'app-site-nav',
  standalone: true,
  templateUrl: './site-nav.component.html',
  styleUrl: './site-nav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteNavComponent {
  protected readonly navLinks = navLinks;
  protected readonly isMobileMenuOpen = signal(false);

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((isOpen) => !isOpen);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
