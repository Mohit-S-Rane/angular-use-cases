import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertService } from 'src/app/services/alert-service';
import { ApiService } from 'src/app/services/api-service';
import { ProjectDetailFormComponent } from '../../resume-dialogues/project-detail-form/project-detail-form.component';
import { ProjectDetail } from './../../../../models/project-detail';
@Component({
  selector: 'app-project-detail-card',
  templateUrl: './project-detail-card.component.html',
//   styleUrls: ['./project-detail-card.component.css'],
})
export class ProjectDetailCardComponent {
  @Input() projectDetail: ProjectDetail;
  constructor(private matDialog: MatDialog,
      private apiService: ApiService,
      private alertService: AlertService) { }

  edit() {
      this.matDialog.open(ProjectDetailFormComponent, {
          width: '90%', height: '90%', data: { projectDetail: this.projectDetail }
      })
  };

  delete() {
      this.apiService.deleteProjectDetail(this.projectDetail._id).subscribe(data=>{
          this.alertService.success('Language deleted successfully');
      })
  }
}