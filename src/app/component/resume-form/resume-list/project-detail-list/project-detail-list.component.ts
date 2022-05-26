import { Component, Input } from '@angular/core';
import { ProjectDetail } from './../../../../models/project-detail';
@Component({
  selector: 'app-project-detail-list',
  templateUrl: './project-detail-list.component.html',
//   styleUrls: ['./project-detail-list.component.css'],
})
export class ProjectDetailListComponent {
  @Input() projectDetailList: ProjectDetail[];
  @Input() resumeId: string;
  constructor() {}
}
