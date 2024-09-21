import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { services } from '../service-page/services-list';
import { Service } from '../service-page/services.model';

@Component({
  selector: 'app-service-page-detail',
  templateUrl: './service-page-detail.component.html',
  styleUrls: ['./service-page-detail.component.scss'],
})
export class ServicePageDetailComponent implements OnInit {
  serviceId!: string;
  service: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Subscribe to route paramMap changes to detect changes in the 'id'
    this.route.paramMap.subscribe((params) => {
      this.serviceId = params.get('id')!;
      this.loadserviceDetails();
    });
  }

  loadserviceDetails() {
    this.service = services.find((p) => p.id === this.serviceId);

    console.log('Selectedservice:', this.service);

    if (!this.service) {
      this.service = {
        name: 'service Not Found',
        longDescription:
          'Sorry, theservice you are looking for is not available.',
        descriptions: [],
      };
    }
  }
}
