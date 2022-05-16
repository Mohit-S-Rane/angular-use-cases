import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReferenceFormComponent } from '../resume-dialogues/reference-form/reference-form.component';
import { Refrence } from './../../../models/refrence';
@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
//   styleUrls: ['./reference.component.css'],
})
export class ReferenceComponent {
  @Input() resumeId: string;
  @Input() references: Refrence[]

  constructor(public matDialog: MatDialog) {}

  add() {
    this.matDialog.open(ReferenceFormComponent, {
        width: '50%', height: '60%', data: {resumeId: this.resumeId, reference: this.references}
    })
  }
}
