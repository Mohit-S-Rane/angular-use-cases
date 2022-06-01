import { Component, Input } from '@angular/core';
import { Interest } from 'src/app/models/interest';
import { Objective } from 'src/app/models/objective';

@Component({
    selector: 'app-template-objective',
    templateUrl: './template-objective.component.html',
    styleUrls: ['./template-objective.component.css'],
})
export class TemplateObjectiveComponent {
    @Input() objective: Objective;
  
    constructor() {
    }
  }
  