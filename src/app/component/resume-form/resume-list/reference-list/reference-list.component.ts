import { Component, Input } from '@angular/core';
import { Refrence } from './../../../../models/refrence';
@Component({
  selector: 'app-reference-list',
  templateUrl: './reference-list.component.html',
//   styleUrls: ['./reference-list.component.css'],
})
export class ReferenceListComponent {
  @Input() referenceList: Refrence[]
  constructor() {}
}
