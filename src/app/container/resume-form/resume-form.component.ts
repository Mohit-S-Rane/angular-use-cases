import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, takeWhile, switchMap, filter } from 'rxjs';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { Resume } from './../../models/resume';
import { IndustrialExposure } from 'src/app/models/industrial-exposure';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.css'],
})
export class ResumeFormComponent implements OnInit, OnDestroy {
  resume: Resume;
  isAlive = true;
  loading = false;

  constructor(
    private resumeRepo: ResumeRepository,
    private route: ActivatedRoute
  ) {}

  ngOnDestroy() {
    this.isAlive = false;
  }

  ngOnInit() {
    this.loading = true;
    const param$ = this.route.params;
    param$
      .pipe(
        takeWhile(() => this.isAlive),
        map((res) => res['id'])
      )
      .subscribe((param) => {
        if (!param) {
          const observer$ = this.resumeRepo.fetchAllResumes();
          const resume$ = observer$[2];
          resume$.pipe(takeWhile(() => this.isAlive)).subscribe((data) => {
            console.log(data);
            this.loading = false;
            this.resume = data[0];
          });
        } else {
          const resume$ = this.route.params.pipe(
            takeWhile(() => this.isAlive),
            map((res) => res['id']),
            switchMap((id) => {
              return this.resumeRepo.getResumeById(id);
            }),
            filter((res) => !!res)
          );
          resume$.subscribe((data) => {
            this.resume = data;
            this.loading = false; 
          });
        }
      });
  }
}
