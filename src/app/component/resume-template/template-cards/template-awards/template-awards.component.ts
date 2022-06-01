import { AfterContentInit, Component, Input } from '@angular/core';
import { AwardsAchivement } from 'src/app/models/awards-achivement';
import { Resume } from 'src/app/models/resume';
import { Skill } from 'src/app/models/skill';
@Component({
  selector: 'app-template-awards',
  templateUrl: './template-awards.component.html',
  styleUrls: ['./template-awards.component.css'],
})
export class TemplateAwardsComponent {
  @Input() award: AwardsAchivement;
  constructor() {}

}
