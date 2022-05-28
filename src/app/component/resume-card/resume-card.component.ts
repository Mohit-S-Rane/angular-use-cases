import { Component, Input } from '@angular/core';
import { Resume } from 'src/app/models/resume';
@Component({
  selector: 'app-resume-card',
  templateUrl: './resume-card.component.html',
  styleUrls: ['./resume-card.component.css'],
})
export class ResumeCardComponent {
  @Input() resume: Resume;
  hover = false;
  constructor() {}
}
