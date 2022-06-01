import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap, takeWhile } from 'rxjs';
import { Resume } from 'src/app/models/resume';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { HttpService } from 'src/app/services/http-service';
import { TemplateType } from 'src/app/utility/utility';
@Component({
  selector: 'app-single-template',
  templateUrl: './single-template.component.html',
  styleUrls: ['./single-template.component.css'],
})
export class SingleTemplateComponent implements OnInit, OnDestroy {
  resume: Resume;
  templateId;
  loading = false;
  isAlive = true;
  templateType = TemplateType;

  constructor(private route: ActivatedRoute, private resumeRepo: ResumeRepository, private httpService: HttpService) {
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  ngOnInit() {
    this.fetchResume();
    const templateId = this.route.params.pipe(takeWhile(() => this.isAlive), map((data) => data['templateId']));
    templateId.subscribe(data => {
      this.templateId = data;
    });
  }

  fetchResume() {
    const resume$ = this.route.params.pipe(takeWhile(() => this.isAlive),
      map((data) => data['id']), switchMap(id => {
        return this.resumeRepo.getResumeById(id);
      }), filter((res) => !!res));
    resume$.subscribe(data => {
      this.resume = data;
      console.log('fetch resume call', this.resume)
    });
  }

  downloadTemplate(html) {
    const data = {
      html
    };
    this.httpService.post('/resume/add/pdf', data,
      true).pipe(takeWhile(() => this.isAlive)).subscribe(res => {
      const blob = new Blob([res], {type: 'application/pdf'});
      const file = URL.createObjectURL(blob);
      window.open(file);
    });
  }
}
