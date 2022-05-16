import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ObjectiveFormComponent } from '../resume-dialogues/objective-form/objective-form.component';
import { Objective } from './../../../models/objective';
@Component({
  selector: 'app-objective',
  templateUrl: './objective.component.html',
//   styleUrls: ['./objective.component.css'],
})
export class ObjectiveComponent {
  @Input() resumeId: string;
  @Input() objectives: Objective[]

  constructor(public matDialog: MatDialog) {}

  add() {
    this.matDialog.open(ObjectiveFormComponent, {
        width: '50%', height: '60%', data: {resumeId: this.resumeId, objective: this.objectives}
    })
}
}
