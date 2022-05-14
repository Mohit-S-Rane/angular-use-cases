import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Interest } from 'src/app/models/interest';
import { InterestFormComponent } from '../resume-dialogues/interest-form/interest-form.component';
@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
//   styleUrls: ['./interest.component.css'],
})
export class InterestComponent {
  @Input() interest: Interest[];
  @Input() resumeId: string;
  
  constructor(private matDialog: MatDialog) {}

  add(){
    this.matDialog.open(InterestFormComponent, {
      width: '90%', height: '50%', data: {resumeId: this.resumeId, interest: this.interest}
    })
  }
}
