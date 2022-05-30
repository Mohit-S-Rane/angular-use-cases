import { Component, Input } from '@angular/core';
import { Resume } from 'src/app/models/resume';
import { MatDialog } from '@angular/material/dialog';
import { AddOrEditResumeComponent } from './../dialogues/add-or-edit-resume/add-or-edit-resume.component';
@Component({
  selector: 'app-resume-card',
  templateUrl: './resume-card.component.html',
  styleUrls: ['./resume-card.component.css'],
})
export class ResumeCardComponent {
  @Input() resume: Resume;
  hover = false;
  constructor(private matDialog: MatDialog) {}

  editResume() {
    this.matDialog.open(AddOrEditResumeComponent, {
      height: '25%', width: '50%', data: this.resume
    });
  }
}
