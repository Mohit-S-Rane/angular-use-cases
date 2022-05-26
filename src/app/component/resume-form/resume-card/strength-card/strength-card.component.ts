import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { AlertService } from 'src/app/services/alert-service';
import { ApiService } from 'src/app/services/api-service';
import { StrengthFormComponent } from '../../resume-dialogues/strength-form/strength-form.component';
import { Strength } from './../../../../models/strength';
@Component({
  selector: 'app-strength-card',
  templateUrl: './strength-card.component.html',
//   styleUrls: ['./strength-card.component.css'],
})
export class StrengthCardComponent {
  @Input() strength: Strength;
  @Input() resumeId: string;
  constructor(private matDialog: MatDialog,
      private resumeRepo: ResumeRepository,
      private alertService: AlertService) { }

  edit() {
      this.matDialog.open(StrengthFormComponent, {
          width: '90%', height: '90%', data: { strength: this.strength, resumeId: this.resumeId }
      })
  };

  delete() {
      this.resumeRepo.deleteStrength(this.strength._id, this.resumeId).subscribe(data=>{
          this.alertService.success('Strength deleted successfully');
      })
  }
}