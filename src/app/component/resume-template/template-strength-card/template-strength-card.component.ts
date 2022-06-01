import { AfterContentInit, Component, Input } from '@angular/core';
import { Resume } from 'src/app/models/resume';
import { Strength } from 'src/app/models/strength';
@Component({
  selector: 'app-template-strength-card',
  templateUrl: './template-strength-card.component.html',
  styleUrls: ['./template-strength-card.component.css'],
})
export class TemplateStrengthCardComponent {
 @Input() strength: Strength;

  constructor() {}

}
