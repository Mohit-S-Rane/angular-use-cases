import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Resume } from 'src/app/models/resume';
import { ShareResumeComponent } from './../../dialogues/share-resume/share.component';
@Component({
  selector: 'app-template-buttons',
  templateUrl: './template-buttons.component.html',
  styleUrls: ['./template-buttons.component.css'],
})
export class TemplateButtonsComponent {
  @Input() resumeId: string;
  @Input() isLeftPanelEnable: any;

  constructor(private router: Router, private matDialog: MatDialog) {}

  editProfile() {
    this.router.navigate(['dashboard', 'resume', 'edit', 'profile', this.resumeId]);
  }

  editResume() {
    this.router.navigate(['dashboard', 'resume', 'edit', this.resumeId]);
  }

  shareResume() {
    this.matDialog.open(ShareResumeComponent, {
      height: '25%', width: '50%'
    })
  }
}
