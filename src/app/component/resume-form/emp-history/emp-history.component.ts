import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmploymentHistory } from 'src/app/models/employment-history';
import { EmpHistoryFormComponent } from './../resume-dialogues/emp-history-form/emp-history-form.component';
@Component({
  selector: 'app-emp-history',
  templateUrl: './emp-history.component.html',
//   styleUrls: ['./emp-history.component.css'],
})
export class EmpHistoryComponent {
  @Input() resumeId: string;
  @Input() employmentHistorys: EmploymentHistory[];

  constructor(private matDialog: MatDialog) {}

  add(){
    this.matDialog.open(EmpHistoryFormComponent, {
      width: '90%', height: '90%', data: {resumeId: this.resumeId, employmentHistory: this.employmentHistorys}
    })
  }
}
