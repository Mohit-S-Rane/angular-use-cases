import { Component, Input } from '@angular/core';
import { Interest } from 'src/app/models/interest';
import { Objective } from 'src/app/models/objective';
import { ProjectDetail } from 'src/app/models/project-detail';

@Component({
    selector: 'app-template-project-detail',
    templateUrl: './template-project-detail.component.html',
    styleUrls: ['./template-project-detail.component.css'],
})
export class TemplateProjectDetailComponent{
    @Input() projectDetail: ProjectDetail;
  
    constructor() {
    }
  }
  