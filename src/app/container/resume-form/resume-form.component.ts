import { Component, Input } from '@angular/core';
import { Resume } from './../../models/resume';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.css'],
})
export class ResumeFormComponent {
  @Input() resume: Resume;
  constructor() {}
}
