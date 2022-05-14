import { Component, Input } from '@angular/core';
import { EmploymentHistory } from 'src/app/models/employment-history';
@Component({
  selector: 'app-emp-history-list',
  templateUrl: './emp-history-list.component.html',
//   styleUrls: ['./emp-history-list.component.css'],
})
export class EmpHistoryListComponent {
  @Input() empHistoryList: EmploymentHistory[];
  constructor() {}
}
