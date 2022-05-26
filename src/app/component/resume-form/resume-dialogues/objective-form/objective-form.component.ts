import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertService } from 'src/app/services/alert-service';
import { ApiService } from 'src/app/services/api-service';
import { Objective } from './../../../../models/objective';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResumeRepository } from 'src/app/repository/resume-repository';

export interface DataType {
  resumeId: string;
  objective: Objective;
}



@Component({
  selector: 'app-objective-form',
  templateUrl: './objective-form.component.html',
//   styleUrls: ['./objective-form.component.css'],
})
export class ObjectiveFormComponent {
  objectiveForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ObjectiveFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataType,
    private resumeRepo: ResumeRepository, private alertService: AlertService
  ) {}

  ngOnInit(): void {
    const objective = this.data.objective ? this.data.objective.objective : null;
    const date = this.data.objective ? this.data.objective.date : null;
    const place = this.data.objective ? this.data.objective.place : null;
    const declaration = this.data.objective ? this.data.objective.declaration : null;

    this.objectiveForm = new FormGroup({
      objective: new FormControl(objective, [Validators.required]),
      date: new FormControl(date,  [Validators.required]),
      place: new FormControl(place, [Validators.required]),
      declaration: new FormControl(declaration, [Validators.required]),
    })
  }

  addOrUpdate(){
    if(this.data.objective._id){
      this.update()
    } else (
      this.save()
    )
  }

  save() {
    const observer$ = this.resumeRepo.addObjective(this.objectiveForm.value, this.data.resumeId);
    observer$.subscribe(data=>{
      this.alertService.success('Objective added successfully');
      this.dialogRef.close();
    }, error=>{
      this.alertService.error(error.message);
      console.log(error);
      
    })
  }

  update() {
    const observer$ = this.resumeRepo.updateObjective(this.objectiveForm.value, this.data.objective._id, this.data.resumeId);
    observer$.subscribe(data=>{
      this.alertService.success('Objective updated successfully');
      this.dialogRef.close();
    }, error=>{
      this.alertService.error(error);
    })
  }
}
