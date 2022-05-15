import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IndustrialExposure } from 'src/app/models/industrial-exposure';
import { IndustrialExposureFormComponent } from '../resume-dialogues/industrial-exposure-form/industrial-exposure-form.component';
@Component({
  selector: 'app-industrial-exposure',
  templateUrl: './industrial-exposure.component.html',
//   styleUrls: ['./industrial-exposure.component.css'],
})
export class IndustrialExposureComponent {
  @Input() resumeId: string;
  @Input() industrialExposures: IndustrialExposure[];

  constructor(public matDialog: MatDialog) {}

  add() {
      this.matDialog.open(IndustrialExposureFormComponent, {
          width: '90%', height: '90%', data: {resumeId: this.resumeId, industrialExposure: this.industrialExposures}
      })
  }
}
