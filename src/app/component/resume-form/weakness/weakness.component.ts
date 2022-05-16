import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WeaknessFormComponent } from '../resume-dialogues/weakness-form/weakness-form.component';
import { Weakness } from './../../../models/weakness';
@Component({
  selector: 'app-weakness',
  templateUrl: './weakness.component.html',
//   styleUrls: ['./weakness.component.css'],
})
export class WeaknessComponent {
  @Input() resumeId: string;
  @Input() weaknesses: Weakness[]

  constructor(public matDialog: MatDialog) {}

  add() {
    this.matDialog.open(WeaknessFormComponent, {
        width: '50%', height: '25%', data: {resumeId: this.resumeId, weakness: this.weaknesses}
    })
  }
}