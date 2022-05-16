import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AwardsAchivement } from 'src/app/models/awards-achivement';
import { AlertService } from 'src/app/services/alert-service';
import { ApiService } from 'src/app/services/api-service';

export interface DataType {
  resumeId: string;
  awardsAchivement: AwardsAchivement;
}

@Component({
  selector: 'app-awards-achivement-form',
  templateUrl: './awards-achivement-form.component.html',
//   styleUrls: ['./awards-achivement-form.component.css'],
})

export class AwardsAchivementFormComponent implements OnInit{
  awardsAchivementForm : FormGroup;

  constructor(public dialogRef: MatDialogRef<AwardsAchivementFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataType, private apiService: ApiService, private alertService: AlertService) {}

  ngOnInit(): void {
    const awardsAndAchivement = this.data.awardsAchivement ? this.data.awardsAchivement.awards_and_achivements : null;

    this.awardsAchivementForm = new FormGroup({
      awards_and_achivements: new FormControl(awardsAndAchivement, [Validators.required])
    })
  }

  addOrUpdate(){
    if(this.data.awardsAchivement._id) {
      this.update();
    } else {
      this.save();
    }    
  }

  save() {
    const observer$ = this.apiService.addAwardsAchivement(this.awardsAchivementForm.value, this.data.resumeId);
    observer$.subscribe(data=>{
      this.alertService.success('Award added successfully');
      this.dialogRef.close()
    })
  }

  update() {
    const observer$ = this.apiService.updateAwardsAchivement(this.awardsAchivementForm.value, this.data.awardsAchivement._id);
    observer$.subscribe(data=>{
      this.alertService.success('Award Updated successfully');
      this.dialogRef.close()
    })
  }

}
