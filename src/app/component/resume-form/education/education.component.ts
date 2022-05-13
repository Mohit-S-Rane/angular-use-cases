import { Component, Input } from '@angular/core';
import { Resume } from './../../../models/resume';
import { Education } from './../../../models/education';
import { MatDialog } from '@angular/material/dialog';
import { EducationFormComponent } from './../resume-dialogues/education-form/education-form.component';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  @Input() resumeId: string;
  @Input() educations: Education[];

  constructor(public matDialog: MatDialog) {}

  add() {
      this.matDialog.open(EducationFormComponent, {
          width: '90%', height: '90%', data: {resumeId: this.resumeId, education: this.educations}
      })
  }
}
