import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResumeRepository } from 'src/app/repository/resume-repository';
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
  @Input() resumeId: string;
  constructor(private matDialog: MatDialog,
      private resumeRepo: ResumeRepository,
      private alertService: AlertService) { }

  edit() {
      this.matDialog.open(ProjectDetailFormComponent, {
          width: '90%', height: '90%', data: { projectDetail: this.projectDetail, resumeId: this.resumeId }
      })
  };

  delete() {
      this.resumeRepo.deleteProjectDetail(this.projectDetail._id, this.resumeId).subscribe(data=>{
          this.alertService.success('Language deleted successfully');
      })
  }
}