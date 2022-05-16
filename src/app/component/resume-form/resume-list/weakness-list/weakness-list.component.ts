import { Component, Input } from '@angular/core';
import { Weakness } from './../../../../models/weakness';
@Component({
  selector: 'app-weakness-list',
  templateUrl: './weakness-list.component.html',
//   styleUrls: ['./weakness-list.component.css'],
})
export class WeaknessListComponent {
  @Input() weaknessList: Weakness[]
  constructor() {}
}