import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmploymentHistory } from 'src/app/models/employment-history';
import { AlertService } from 'src/app/services/alert-service';
import { ApiService } from 'src/app/services/api-service';
import { EmpHistoryFormComponent } from '../../resume-dialogues/emp-history-form/emp-history-form.component';
@Component({
  selector: 'app-emp-history-card',
  templateUrl: './emp-history-card.component.html',
//   styleUrls: ['./emp-history-card.component.css'],
})
export class EmpHistoryCardComponent {
  @Input() employmentHistory: EmploymentHistory;
  constructor(private matDialog: MatDialog ,private apiService: ApiService, private alertService: AlertService) {}

  edit() {
    this.matDialog.open(EmpHistoryFormComponent, {
      width: '90%', height: '90%', data: { employmentHistory: this.employmentHistory}  
    })
  };

  delete() {
    this.apiService.deleteEmploymentHistory(this.employmentHistory._id).subscribe(data=>{
      this.alertService.success('Employment History Deleted successfully')
    }, error=>{
      this.alertService.error(error.message);
    })
  };
}
