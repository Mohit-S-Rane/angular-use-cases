import { AfterContentInit, Component, Input } from '@angular/core';
import { Language } from 'src/app/models/language';
import { Resume } from 'src/app/models/resume';
@Component({
  selector: 'app-template-language-card',
  templateUrl: './template-language-card.component.html',
  styleUrls: ['./template-language-card.component.css'],
})
export class TemplateLanguageCardComponent {
  @Input() language: Language;
  constructor() {}

}
