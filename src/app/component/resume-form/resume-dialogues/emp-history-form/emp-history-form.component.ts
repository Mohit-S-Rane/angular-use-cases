import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertService } from 'src/app/services/alert-service';
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
export class EmpHistoryFormComponent implements OnInit{
  
  employmentHistoryForm: FormGroup;
  monthArray = ['Jaunary', 'February','March','April','May','June','July','Augest','September','Octomber','November','December'];

  constructor(public dialogRef: MatDialogRef<EmpHistoryFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataType,
    private apiService: ApiService,private alertService: AlertService) {}

    ngOnInit(): void {
      const employer = this.data.employmentHistory ? this.data.employmentHistory.employer : null;
      const designation = this.data.employmentHistory ? this.data.employmentHistory.designation : null;
      const organisation = this.data.employmentHistory ? this.data.employmentHistory.organisation : null;
      const city = this.data.employmentHistory ? this.data.employmentHistory.city : null;
      const state = this.data.employmentHistory ? this.data.employmentHistory.state : null;
      const startMonth = this.data.employmentHistory ? this.data.employmentHistory.start_month : null;
      const startYear = this.data.employmentHistory ? this.data.employmentHistory.start_year : null;
      const endMonth = this.data.employmentHistory ? this.data.employmentHistory.end_month : null;
      const endYear = this.data.employmentHistory ? this.data.employmentHistory.end_year : null;

      this.employmentHistoryForm = new FormGroup({
        employer: new FormControl(employer, [Validators.required]),
        designation: new FormControl(designation, [Validators.required]),
        organisation: new FormControl(organisation, [Validators.required]),
        city: new FormControl(city, [Validators.required]),
        state: new FormControl(state, [Validators.required]),
        start_month: new FormControl(startMonth, [Validators.required]),
        start_year: new FormControl(startYear, [Validators.required]),
        end_month: new FormControl(endMonth),
        end_year: new FormControl(endYear)
      })
    }

    addOrUpdate() {
      if(this.data.employmentHistory._id){
        this.update();
      } else {
        this.save();
      }
    }

    save() {
      const observer$ = this.apiService.addEmploymentHistory(this.employmentHistoryForm.value, this.data.resumeId)
      observer$.subscribe(data=>{
        this.alertService.success('Employment Work History added successfully')
        this.dialogRef.close();
      })
    }

    update() {
      const observer$ = this.apiService.updateEmploymentHistory(this.employmentHistoryForm.value, this.data.employmentHistory._id)
      observer$.subscribe(data=>{
        this.alertService.success('Employment Work History updated successfully')
        this.dialogRef.close();
      })
    }
}
