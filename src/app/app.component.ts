import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { HeroComponent } from './components/hero/hero.component';
import { PhotoCollageSectionComponent } from './components/photo-collage-section/photo-collage-section.component';
import { PhotoLightboxComponent } from './components/photo-lightbox/photo-lightbox.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import { SiteNavComponent } from './components/site-nav/site-nav.component';
import { WelcomeIntroComponent } from './components/welcome-intro/welcome-intro.component';
import { contentSections } from './data/site-content.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SiteNavComponent,
    HeroComponent,
    WelcomeIntroComponent,
    PhotoCollageSectionComponent,
    CallToActionComponent,
    SiteFooterComponent,
    PhotoLightboxComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly contentSections = contentSections;
}
