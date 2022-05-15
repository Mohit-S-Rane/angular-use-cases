import { Component, Input } from '@angular/core';
import { Language } from 'src/app/models/language';
@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
//   styleUrls: ['./language-list.component.css'],
})
export class LanguageListComponent {
    @Input() languageList: Language[]
  constructor() {}
}
