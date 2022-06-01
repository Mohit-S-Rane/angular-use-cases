import { AfterContentInit, Component, Input } from '@angular/core';
import { Resume } from 'src/app/models/resume';
@Component({
  selector: 'app-template-contact-detail',
  templateUrl: './template-contact-detail.component.html',
  styleUrls: ['./template-contact-detail.component.css'],
})
export class TemplateContactDetailComponent implements AfterContentInit {
  @Input() resume: Resume;
  imageUrl = '';

  constructor() {}

  ngAfterContentInit() {
    this.imageUrl = this.resume.image_url ? this.resume.image_url : '../../assets/testimonial.png';
  }
}
