import { AfterContentInit, Component, Input } from '@angular/core';
import { Education } from 'src/app/models/education';
import { Resume } from 'src/app/models/resume';
import { Skill } from 'src/app/models/skill';
@Component({
  selector: 'app-template-education',
  templateUrl: './template-education.component.html',
  styleUrls: ['./template-education.component.css'],
})
export class TemplateEducationComponent {
  @Input() education: Education;
  constructor() {}

}
