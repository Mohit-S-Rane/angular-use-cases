import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { AlertService } from 'src/app/services/alert-service';
import { ApiService } from 'src/app/services/api-service';
import { ReferenceFormComponent } from '../../resume-dialogues/reference-form/reference-form.component';
import { Refrence } from './../../../../models/refrence';
@Component({
  selector: 'app-reference-card',
  templateUrl: './reference-card.component.html',
//   styleUrls: ['./reference-card.component.css'],
})
export class ReferenceCardComponent {
  @Input() reference: Refrence;
  @Input() resumeId: string;
  constructor(private matDialog: MatDialog,
      private resumeRepo: ResumeRepository,
      private alertService: AlertService) { }

  edit() {
      this.matDialog.open(ReferenceFormComponent, {
          width: '90%', height: '90%', data: { reference: this.reference, resumeId: this.resumeId}
      })
  };

  delete() {
      this.resumeRepo.deleteReference(this.reference._id, this.resumeId).subscribe(data=>{
          this.alertService.success('Language deleted successfully');
      })
  }
}