import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api-service';
import { EmploymentHistory } from './../../../../models/employment-history';

export interface DataType{
  resumeId: string;
  employmentHistory: EmploymentHistory;
}

@Component({
  selector: 'app-emp-history-form',
  templateUrl: './emp-history-form.component.html',
//   styleUrls: ['./emp-history-form.component.css'],
})
export class EmpHistoryFormComponent {
  monthArray = ['Jaunary', 'February','March','April','May','June','July','Augest','September','Octomber','November','December'];

  constructor(public dialogRef: MatDialogRef<EmpHistoryFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataType,
    private apiService: ApiService) {}
}
