import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { procedures } from '../blog/procedures';

@Component({
  selector: 'app-procedure-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  procedureId!: string;
  procedure: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Subscribe to route paramMap changes to detect changes in the 'id'
    this.route.paramMap.subscribe(params => {
      this.procedureId = params.get('id')!;
      this.loadProcedureDetails();
    });
  }

  loadProcedureDetails() {
    this.procedure = procedures.find(p => p.id === this.procedureId);
  
    console.log('Selected procedure:', this.procedure);
  
    if (!this.procedure) {
      this.procedure = {
        name: 'Procedure Not Found',
        longDescription: 'Sorry, the procedure you are looking for is not available.',
        descriptions: [],
      };
    }
  }
  
  
}
