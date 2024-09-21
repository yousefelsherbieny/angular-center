import { Component } from '@angular/core';
import { procedures } from './procedures';
import { Procedure } from './procedure.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  procedures: Procedure[] = procedures; // Use the imported procedures array

  constructor() {
    // Any additional initialization can go here
  }
}
