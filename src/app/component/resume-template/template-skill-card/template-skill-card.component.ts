import { AfterContentInit, Component, Input } from '@angular/core';
import { Resume } from 'src/app/models/resume';
import { Skill } from 'src/app/models/skill';
@Component({
  selector: 'app-template-skill-card',
  templateUrl: './template-skill-card.component.html',
  styleUrls: ['./template-skill-card.component.css'],
})
export class TemplateSkillCardComponent {
  @Input() skill: Skill;
  constructor() {}

}
