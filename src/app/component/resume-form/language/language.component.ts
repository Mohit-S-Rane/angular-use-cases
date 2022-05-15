import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Language } from 'src/app/models/language';
import { LanguageFormComponent } from '../resume-dialogues/language-form/language-form.component';
@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
//   styleUrls: ['./language.component.css'],
})
export class LanguageComponent {
  @Input() resumeId: string;
  @Input() languages: Language[]

  constructor(public matDialog: MatDialog) {}

  add() {
    this.matDialog.open(LanguageFormComponent, {
        width: '50%', height: '40%', data: {resumeId: this.resumeId, language: this.languages}
    })
}
}
