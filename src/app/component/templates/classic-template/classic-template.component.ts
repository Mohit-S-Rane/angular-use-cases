import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Resume } from 'src/app/models/resume';
@Component({
  selector: 'app-classic-template',
  templateUrl: './classic-template.component.html',
  styleUrls: ['./classic-template.component.css'],
})
export class ClassicTemplateComponent {
  @Input() resume: Resume;
  @Output() downloadTemplate = new EventEmitter<string>();
  constructor() {}

  download() {}
}
