import { Component, Input } from '@angular/core';
import { Resume } from 'src/app/models/resume';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ContactDetailFormComponent } from './../../resume-dialogues/contact-detail-form/contact-detail-form.component';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
})
export class ContactDetailsComponent {
  @Input() resume: Resume;

  constructor(private matDialog: MatDialog) {}

  openContactForm() {
      this.matDialog.open(ContactDetailFormComponent, {
          width: '256px', data: this.resume, disableClose: true
      })
  }
}
