import { Component } from '@angular/core';
import { Service } from './services.model';
import { services } from './services-list'; // Import the services array

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss'], // Fix the styleUrls property here
})
export class ServicePageComponent {
  services: Service[] = services; // Initialize the services array
}
