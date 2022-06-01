import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, switchMap, takeWhile } from 'rxjs';
import { Resume } from 'src/app/models/resume';
import { ResumeRepository } from 'src/app/repository/resume-repository';
@Component({
  selector: 'app-single-resume',
  templateUrl: './single-resume.component.html',
  styleUrls: ['./single-resume.component.css'],
})
export class SingleResumeComponent implements OnInit, OnDestroy{
  resume: Resume;
  loading = false;
  isAlive = true;
  isPreview = false;
  imageUrl = ''; 

  constructor(private route: ActivatedRoute, private router: Router, private resumeRepo: ResumeRepository) {}


  ngOnInit(): void {
    this.isPreview = this.router.url.includes('preview');
    const resume$ = this.route.params.pipe(takeWhile(() => this.isAlive),
      map(data => data['id']), switchMap(id => {
        return this.resumeRepo.getResumeById(id);
      }), filter(res => !!res))
    resume$.subscribe(data => {
      this.resume = data;
    })
    
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

}
