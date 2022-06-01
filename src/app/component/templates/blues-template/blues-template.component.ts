import { Component } from '@angular/core';
import { Resume } from 'src/app/models/resume';
@Component({
  selector: 'app-blues-template',
  templateUrl: './blues-template.component.html',
  styleUrls: ['./blues-template.component.css'],
})
export class BluesTemplateComponent {
  resume: Resume;

  constructor() {}
}
