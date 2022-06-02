import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Resume } from 'src/app/models/resume';
@Component({
  selector: 'app-template-buttons',
  templateUrl: './template-buttons.component.html',
  styleUrls: ['./template-buttons.component.css'],
})
export class TemplateButtonsComponent {
  @Input() resumeId: string;
  @Input() isLeftPanelEnable: any;

  constructor(private router: Router) {}

  editProfile() {
    this.router.navigate(['dashboard', 'resume', 'edit', 'profile', this.resumeId]);
  }

  editResume() {
    this.router.navigate(['dashboard', 'resume', 'edit', this.resumeId]);
  }
}
