import { Component, OnInit, OnDestroy } from '@angular/core';
import { Resume } from './../../../models/resume';
import { ResumeRepository } from './../../../repository/resume-repository';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit, OnDestroy{
  resumeList: Resume[];
  isAlive = true;
  loading = false;
  
  constructor(private resumeRepo: ResumeRepository) {}

  ngOnInit(): void {
    this.fetchData();
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  fetchData() {
    const observer$ = this.resumeRepo.fetchAllResumes();
    observer$[2].subscribe(resumes =>{
      this.resumeList = resumes
    })

    observer$[0].subscribe(loading=>{
      this.loading = loading;
    })
  }
}
