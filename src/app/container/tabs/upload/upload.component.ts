import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Resume } from 'src/app/models/resume';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { filter, map, switchMap, takeWhile } from 'rxjs';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit, OnDestroy {
  resume: Resume;
  isAlive = true;
  loading = false;

  constructor(private route: ActivatedRoute, private resumeRepo: ResumeRepository) {
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  ngOnInit() {
    this.loading = true;
    const param$ = this.route.params;
    param$.pipe(takeWhile(() => this.isAlive), map(res => res['id'])).subscribe(param => {
      if (!param) {
        const observer$ = this.resumeRepo.fetchAllResumes();
        const resume$ = observer$[2];
        resume$.pipe(takeWhile(() => this.isAlive))
          .subscribe((data) => {
            this.loading = false;
            this.resume = data[0];
          });
      } else {
        const resume$ = this.route.params.pipe(takeWhile(() => this.isAlive),
          map(res => res['id']), switchMap((id) => {
            return this.resumeRepo.getResumeById(id);
          }), filter(res => !!res));
        resume$.subscribe(data => {
          this.resume = data;
          this.loading = false;
        });
      }
    });
  }
}
