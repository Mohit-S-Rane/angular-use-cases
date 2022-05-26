import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { AlertService } from 'src/app/services/alert-service';
import { ApiService } from 'src/app/services/api-service';
import { WeaknessFormComponent } from '../../resume-dialogues/weakness-form/weakness-form.component';
import { Weakness } from './../../../../models/weakness';
@Component({
  selector: 'app-weakness-card',
  templateUrl: './weakness-card.component.html',
//   styleUrls: ['./weakness-card.component.css'],
})
export class WeaknessCardComponent {
  @Input() weakness: Weakness;
  @Input() resumeId: string;
  constructor(private matDialog: MatDialog,
      private resumeRepo: ResumeRepository,
      private alertService: AlertService) { }

  edit() {
      this.matDialog.open(WeaknessFormComponent, {
          width: '90%', height: '90%', data: { weakness: this.weakness, resumeId: this.resumeId}
      })
  };

  delete() {
      this.resumeRepo.deleteWeakness(this.weakness._id, this.resumeId).subscribe(data=>{
          this.alertService.success('Weakness deleted successfully');
      })
  }
}