import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AwardsAchivement } from 'src/app/models/awards-achivement';
import { AwardsAchivementFormComponent } from '../resume-dialogues/awards-achivement-form/awards-achivement-form.component';
@Component({
  selector: 'app-awards-achivement',
  templateUrl: './awards-achivement.component.html',
//   styleUrls: ['./awards-achivement.component.css'],
})

export class AwardsAchivementComponent {
  @Input() resumeId: string;
  @Input() awardsAchivements: AwardsAchivement[];

  constructor(private matDialog: MatDialog) {}

  add(){
    this.matDialog.open(AwardsAchivementFormComponent, {
      width: '50%', height: '30%', data: {resumeId: this.resumeId, awardsAchivement: this.awardsAchivements}
    })
  }
}
