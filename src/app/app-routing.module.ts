import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/theme/layout/layout.component';
import { AboutComponent } from './core/theme/about/about.component';
import { ContactUsComponent } from './core/theme/contact-us/contact-us.component';
import { BlogComponent } from './core/theme/blog/blog.component';
import { BlogDetailComponent } from './core/theme/blog-detail/blog-detail.component';
import { ServicePageDetailComponent } from './core/theme/Services/service-page-detail/service-page-detail.component';
import { ServicePageComponent } from './core/theme/Services/service-page/service-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    data: {
      title: 'home',
    },
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
  { path: 'About', component: AboutComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'blog', component: ServicePageComponent },
  { path: 'procedure/:id', component: BlogDetailComponent },
  { path: 'service-page', component: BlogComponent },
  { path: 'blogs/:id', component: ServicePageDetailComponent }, // Route for service details
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
