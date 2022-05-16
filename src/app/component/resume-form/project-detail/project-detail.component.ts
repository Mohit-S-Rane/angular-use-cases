import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailFormComponent } from '../resume-dialogues/project-detail-form/project-detail-form.component';
import { ProjectDetail } from './../../../models/project-detail';
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
//   styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent {
  @Input() resumeId: string;
  @Input() ProjectDetails: ProjectDetail[]

  constructor(public matDialog: MatDialog) {}

  add() {
    this.matDialog.open(ProjectDetailFormComponent, {
        width: '50%', height: '60%', data: {resumeId: this.resumeId, ProjectDetail: this.ProjectDetails}
    })
  }
}