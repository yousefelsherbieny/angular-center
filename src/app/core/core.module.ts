import { LOCALE_ID, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

// Importing components
import { HeaderComponent } from './theme/header/header.component';
import { FooterComponent } from './theme/footer/footer.component';
import { LayoutComponent } from './theme/layout/layout.component';
import { SliderComponent } from './theme/slider/slider.component';
import { BlogComponent } from './theme/blog/blog.component';
import { AboutComponent } from './theme/about/about.component';
import { ContactUsComponent } from './theme/contact-us/contact-us.component';
import { BlogDetailComponent } from './theme/blog-detail/blog-detail.component';
import { ServicePageComponent } from './theme/Services/service-page/service-page.component';
import { ServicePageDetailComponent } from './theme/Services/service-page-detail/service-page-detail.component';
import { TranslateModule } from '@ngx-translate/core';import 
{ FixedService } from './utils/fixed.service';

const fixed = new FixedService();

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    SliderComponent,
    BlogComponent,
    AboutComponent,
    BlogDetailComponent,
    ContactUsComponent,
    ServicePageComponent,
    ServicePageDetailComponent,
  ],
  imports: [
    CommonModule,  // For common Angular directives and pipes
    RouterModule,
    TitleCasePipe,
    TranslateModule  // For using routing functionality within this module
  ],
  exports: [
    HeaderComponent, 
    FooterComponent, 
    LayoutComponent  // Exporting components to be used elsewhere in the app
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ar' },
    { provide: FixedService, useValue: fixed },
  ],
})
export class CoreModule {
  // Use forRoot() for singleton services or configurations that should be available globally
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: []  // Add global services here, if needed
    };
  }
}
