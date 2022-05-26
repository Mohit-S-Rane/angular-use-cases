import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { AlertService } from 'src/app/services/alert-service';
import { ApiService } from 'src/app/services/api-service';
import { Strength } from './../../../../models/strength';

export interface DataType {
  resumeId: string;
  strength: Strength;
}

@Component({
  selector: 'app-strength-form',
  templateUrl: './strength-form.component.html',
//   styleUrls: ['./strength-form.component.css'],
})
export class StrengthFormComponent {
  strengthForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<StrengthFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataType,
    private resumeRepo: ResumeRepository, private alertService: AlertService
  ) {}

  ngOnInit(): void {
    const name = this.data.strength ? this.data.strength.name : null;

    this.strengthForm = new FormGroup({
      name: new FormControl(name, [Validators.required]),
    })
  }

  addOrUpdate(){
    if(this.data.strength?._id){
      this.update()
    } else (
      this.save()
    )
  }

  save() {
    const observer$ = this.resumeRepo.addStrength(this.strengthForm.value, this.data.resumeId);
    observer$.subscribe(data=>{
      this.alertService.success('Strength added successfully');
      this.dialogRef.close();
    }, error=>{
      this.alertService.error(error.message);
    })
  }

  update() {
    const observer$ = this.resumeRepo.updateStrength(this.strengthForm.value, this.data.strength._id, this.data.resumeId);
    observer$.subscribe(data=>{
      this.alertService.success('Strength updated successfully');
      this.dialogRef.close();
    }, error=>{
      this.alertService.error(error);
    })
  }
}
