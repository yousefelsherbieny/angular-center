import { Component } from '@angular/core';
import { services } from '../Services/service-page/services-list';
import { Service } from '../Services/service-page/services.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  services: Service[] = services; // Initialize the services array

}
