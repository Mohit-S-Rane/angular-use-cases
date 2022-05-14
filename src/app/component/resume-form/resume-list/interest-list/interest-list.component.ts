import { Component, Input } from '@angular/core';
import { Interest } from 'src/app/models/interest';
@Component({
  selector: 'app-interest-list',
  templateUrl: './interest-list.component.html',
//   styleUrls: ['./interest-list.component.css'],
})
export class InterestListComponent {
  @Input() interestList: Interest[];
  constructor() {}
}
