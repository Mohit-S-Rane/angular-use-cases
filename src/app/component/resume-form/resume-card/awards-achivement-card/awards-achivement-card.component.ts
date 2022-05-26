import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AwardsAchivement } from 'src/app/models/awards-achivement';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { AlertService } from 'src/app/services/alert-service';
import { ApiService } from 'src/app/services/api-service';
import { AwardsAchivementFormComponent } from '../../resume-dialogues/awards-achivement-form/awards-achivement-form.component';
@Component({
  selector: 'app-awards-achivement-card',
  templateUrl: './awards-achivement-card.component.html',
//   styleUrls: ['./awards-achivement-card.component.css'],
})
export class AwardsAchivementCardComponent {
  @Input() awardsAchivement: AwardsAchivement;
  @Input() resumeId: string;
  constructor(private matDialog: MatDialog ,private resumeRepo: ResumeRepository, private alertService: AlertService) {}

  edit() {
    this.matDialog.open(AwardsAchivementFormComponent, {
      width: '90%', height: '90%', data: { awardsAchivement: this.awardsAchivement, resumeId: this.resumeId}  
    })
  };

  delete() {
    this.resumeRepo.deleteAward(this.awardsAchivement._id, this.resumeId).subscribe(data=>{
      this.alertService.success('Employment History Deleted successfully')
    }, error=>{
      this.alertService.error(error.message);
    })
  };
}
