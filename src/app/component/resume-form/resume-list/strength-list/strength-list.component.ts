import { Component, Input } from '@angular/core';
import { Strength } from './../../../../models/strength';
@Component({
  selector: 'app-strength-list',
  templateUrl: './strength-list.component.html',
//   styleUrls: ['./strength-list.component.css'],
})
export class StrengthListComponent {
  @Input() strengthList: Strength[]
  constructor() {}
}
