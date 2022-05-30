import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap, takeWhile } from 'rxjs';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { Utility } from './../../utility/utility';
@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css'],
})
export class TemplatesComponent implements OnDestroy {
  templates = Utility.Templates;
  resumeId;
  resume;
  isAlive = true;

  constructor(private route: ActivatedRoute, private resumeRepo : ResumeRepository) {
    const id$ = this.route.params;
    id$.subscribe(data => {
      this.resumeId = data['id'];
    });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }
}