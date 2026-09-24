import { ChangeDetectionStrategy, ChangeDetectorRef, Component, signal } from '@angular/core';
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

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((isOpen) => !isOpen);
  }

  navigateToSection(event: MouseEvent, sectionId: string): void {
    event.preventDefault();
    this.isMobileMenuOpen.set(false);
    this.changeDetectorRef.detectChanges();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
