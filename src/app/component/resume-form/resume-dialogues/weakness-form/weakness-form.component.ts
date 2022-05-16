import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertService } from 'src/app/services/alert-service';
import { ApiService } from 'src/app/services/api-service';
import { Weakness } from './../../../../models/weakness';

export interface DataType {
  resumeId: string;
  weakness: Weakness;
}

@Component({
  selector: 'app-weakness-form',
  templateUrl: './weakness-form.component.html',
//   styleUrls: ['./weakness-form.component.css'],
})
export class WeaknessFormComponent {
  weaknessForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<WeaknessFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataType,
    private apiService: ApiService, private alertService: AlertService
  ) {}

  ngOnInit(): void {
    const name = this.data.weakness ? this.data.weakness.name : null;

    this.weaknessForm = new FormGroup({
      name: new FormControl(name, [Validators.required]),
    })
  }

  addOrUpdate(){
    if(this.data.weakness?._id){
      this.update()
    } else (
      this.save()
    )
  }

  save() {
    const observer$ = this.apiService.addWeakness(this.weaknessForm.value, this.data.resumeId);
    observer$.subscribe(data=>{
      this.alertService.success('Weakness added successfully');
      this.dialogRef.close();
    }, error=>{
      this.alertService.error(error.message);
    })
  }

  update() {
    const observer$ = this.apiService.updateStrength(this.weaknessForm.value, this.data.weakness._id);
    observer$.subscribe(data=>{
      this.alertService.success('Weakness updated successfully');
      this.dialogRef.close();
    }, error=>{
      this.alertService.error(error);
    })
  }
}
