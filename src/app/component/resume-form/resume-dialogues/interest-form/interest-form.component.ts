import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Interest } from 'src/app/models/interest';
import { AlertService } from 'src/app/services/alert-service';
import { ApiService } from 'src/app/services/api-service';

export interface DataType {
  resumeId: string;
  interest: Interest
}

@Component({
  selector: 'app-interest-form',
  templateUrl: './interest-form.component.html',
//   styleUrls: ['./interest-form.component.css'],
})
export class InterestFormComponent implements OnInit{
  interestForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<InterestFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataType,
    private apiService: ApiService,private alertService: AlertService) {}

    ngOnInit(): void {
      const interest = this.data.interest ? this.data.interest.interest : null;
      this.interestForm = new FormGroup({
        interest: new FormControl(interest, [Validators.required])
      })
    }

    addOrUpdate() {
      if(this.data.interest._id){
        this.update();
      } else {
        this.save();
      }
    }

    save() {
      const observer$ = this.apiService.addInterest(this.interestForm.value, this.data.resumeId);
      observer$.subscribe(data=>{
        this.alertService.success('Interest added successfully');
        this.dialogRef.close();
      })
    };

    update() {
      const observer$ = this.apiService.updateInterest(this.interestForm.value, this.data.interest._id);
      observer$.subscribe(data=>{
        this.alertService.success('Interest Updated successfully');
        this.dialogRef.close();
      })
    }
}
