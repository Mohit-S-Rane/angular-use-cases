import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Language } from 'src/app/models/language';
import { AlertService } from 'src/app/services/alert-service';
import { ApiService } from 'src/app/services/api-service';
import { LanguageFormComponent } from '../../resume-dialogues/language-form/language-form.component';
@Component({
    selector: 'app-language-card',
    templateUrl: './language-card.component.html',
    //   styleUrls: ['./app.component.css'],
})
export class LanguageCardComponent {
    @Input() language: Language;
    constructor(private matDialog: MatDialog,
        private apiService: ApiService,
        private alertService: AlertService) { }

    edit() {
        this.matDialog.open(LanguageFormComponent, {
            width: '90%', height: '90%', data: { language: this.language }
        })
    };

    delete() {
        this.apiService.deleteLanguage(this.language._id).subscribe(data=>{
            this.alertService.success('Language deleted successfully');
        })
    }
}