import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeWhile } from 'rxjs';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { Resume } from './../../models/resume';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.css'],
})
export class ResumeFormComponent implements OnInit, OnDestroy {
  @Input() resume: Resume;
  isAlive = true;
  loading = false;

  constructor(private resumeRepo: ResumeRepository, private route: ActivatedRoute) {
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  ngOnInit() {
    this.loading = true;
    const param$ = this.route.params;
    param$.pipe(takeWhile(() => this.isAlive)).subscribe(param => {
      if (!!param) {
        const observer$ = this.resumeRepo.fetchAllResumes();
        const resume$ = observer$[2];
        resume$.pipe(takeWhile(() => this.isAlive))
          .subscribe((data) => {
            console.log(data);
            this.loading = false;
            this.resume = data[0];
          });
      }
    });
  }
}

