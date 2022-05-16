import { Component, Input } from '@angular/core';
import { Objective } from './../../../../models/objective';
@Component({
  selector: 'app-objective-list',
  templateUrl: './objective-list.component.html',
//   styleUrls: ['./objective-list.component.css'],
})
export class ObjectiveListComponent {
  @Input() objectiveList: Objective[]
  constructor() {}
}
