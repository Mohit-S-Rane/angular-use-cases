import { Component, Input } from '@angular/core';
import { Resume } from 'src/app/models/resume';
import { MatDialog } from '@angular/material/dialog';
import { AddOrEditResumeComponent } from './../dialogues/add-or-edit-resume/add-or-edit-resume.component';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { AlertService } from './../../services/alert-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-resume-card',
  templateUrl: './resume-card.component.html',
  styleUrls: ['./resume-card.component.css'],
})
export class ResumeCardComponent {
  @Input() resume: Resume;
  hover = false;
  constructor(private matDialog: MatDialog, private resumeRepo: ResumeRepository, private alertService: AlertService, private router: Router) {}

  editResume() {
    this.matDialog.open(AddOrEditResumeComponent, {
      height: '25%', width: '50%', data: this.resume
    });
  }

  delete() {
    this.resumeRepo.deleteResume(this.resume._id).subscribe(data => {
      this.alertService.success('Resume deleted successfully')
    })
  }

  download() {
    this.router.navigate(['dashboard', 'resume', 'template', this.resume._id])
  }
}
