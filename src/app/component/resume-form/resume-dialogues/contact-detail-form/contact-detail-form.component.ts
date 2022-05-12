import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Resume } from './../../../../models/resume';
@Component({
  selector: 'app-contact-detail-form',
  templateUrl: './contact-detail-form.component.html',
//   styleUrls: ['./contact-detail-form.component.css'],
})
export class ContactDetailFormComponent {
  constructor(private dialogRef: MatDialogRef<ContactDetailFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Resume) {
        console.log(this.data);
        
    }
}
