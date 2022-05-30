import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-template-card',
  templateUrl: './template-card.component.html',
  styleUrls: ['./template-card.component.css'],
})
export class TemplateCardComponent {
  @Input() template;
  @Input() resumeId;
  constructor(private router: Router) {
  }

  openTemplate() {
    this.router.navigate(['dashboard', 'resume', 'template', this.resumeId, this.template.id])
  }
}
