import { AfterContentInit, Component, Input } from '@angular/core';
import { Resume } from 'src/app/models/resume';
import { Weakness } from 'src/app/models/weakness';
@Component({
  selector: 'app-template-weakness-card',
  templateUrl: './template-weakness-card.component.html',
  styleUrls: ['./template-weakness-card.component.css'],
})
export class TemplateWeaknessCardComponent {
  @Input() weakness: Weakness
  constructor() {}

}
