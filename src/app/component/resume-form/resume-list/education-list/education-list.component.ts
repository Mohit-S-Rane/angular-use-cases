import { Component, Input } from '@angular/core';
import { Education } from './../../../../models/education';

@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  //   styleUrls: ['./education-list.component.css'],
})
export class EducationListComponent {
  @Input() educationList: Education[];
  @Input() resumeId: string;
  constructor() {}
}
