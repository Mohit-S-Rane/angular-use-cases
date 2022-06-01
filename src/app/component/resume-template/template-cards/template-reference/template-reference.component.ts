import { Component, Input } from '@angular/core';
import { Interest } from 'src/app/models/interest';
import { Objective } from 'src/app/models/objective';
import { ProjectDetail } from 'src/app/models/project-detail';
import { Refrence } from 'src/app/models/refrence';

@Component({
    selector: 'app-template-reference',
    templateUrl: './template-reference.component.html',
    styleUrls: ['./template-reference.component.css'],
})
export class TemplateReferenceComponent {
    @Input() reference: Refrence;
    constructor() {
    }
  }