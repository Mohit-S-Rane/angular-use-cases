import { Component, Input } from '@angular/core';
import { IndustrialExposure } from 'src/app/models/industrial-exposure';
@Component({
  selector: 'app-industrial-exposure-list',
  templateUrl: './industrial-exposure-list.component.html',
//   styleUrls: ['./industrial-exposure-list.component.css'],
})
export class IndustrialExposureListComponent {
  @Input() industrialExposureList: IndustrialExposure[];
  @Input() resumeId: string;
  constructor() {}
}
