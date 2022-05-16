import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StrengthFormComponent } from '../resume-dialogues/strength-form/strength-form.component';
import { Strength } from './../../../models/strength';
@Component({
  selector: 'app-strength',
  templateUrl: './strength.component.html',
//   styleUrls: ['./strength.component.css'],
})
export class StrengthComponent {
  @Input() resumeId: string;
  @Input() strengths: Strength[]

  constructor(public matDialog: MatDialog) {}

  add() {
    this.matDialog.open(StrengthFormComponent, {
        width: '50%', height: '25%', data: {resumeId: this.resumeId, strength: this.strengths}
    })
  }
}