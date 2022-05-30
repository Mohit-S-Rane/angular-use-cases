import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-template-card',
  templateUrl: './template-card.component.html',
  styleUrls: ['./template-card.component.css'],
})
export class TemplateCardComponent {
  @Input() template;
  constructor() {
  }
}
