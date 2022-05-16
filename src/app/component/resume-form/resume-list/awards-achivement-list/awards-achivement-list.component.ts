import { Component, Input, OnInit } from '@angular/core';
import { AwardsAchivement } from 'src/app/models/awards-achivement';
@Component({
  selector: 'app-awards-achivement-list',
  templateUrl: './awards-achivement-list.component.html',
//   styleUrls: ['./awards-achivement-list.component.css'],
})
export class AwardsAchivementListComponent {
  @Input() awardsAchivementList: AwardsAchivement[];
  constructor() {}
}
