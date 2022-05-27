import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs';
import { Resume } from 'src/app/models/resume';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { ApiService } from 'src/app/services/api-service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.component.html',
  styleUrls: ['./on-boarding.component.css'],
})
export class OnBoardingComponent implements OnInit, OnDestroy {
  resume: Resume;
  isFirstStepCompleted = false;
  loading = true;
  isAlive = true;

  constructor(private resumeRepo: ResumeRepository, private router: Router) {
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  ngOnInit() {
    const observer$ = this.resumeRepo.fetchAllResumes();
    const resume$ = observer$[2];
    resume$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      if (data.length) {
        this.resume = data[0];
        this.isFirstStepCompleted = true;
        this.loading = false;
      }
    });
  }

  finish() {
    this.resumeRepo.updateOnBoarding({onboarding: 200}).subscribe(data => {
      this.router.navigate(['dashboard']);
    });
  }
}
