import { Component, Input } from '@angular/core';
import { Resume } from 'src/app/models/resume';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
})
export class ContactDetailsComponent {
  @Input() resume: Resume;

  constructor() {}
}
