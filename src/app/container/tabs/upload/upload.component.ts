import { Component, Input } from '@angular/core';
import { Resume } from 'src/app/models/resume';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent {
  @Input() resume: Resume;
  constructor() {
  }
}
