import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api-service';
import { Education } from './../../../../models/education';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IndustrialExposure } from 'src/app/models/industrial-exposure';
import { AlertService } from 'src/app/services/alert-service';
import { ResumeRepository } from 'src/app/repository/resume-repository';

export interface DataType {
  resumeId: string;
  industrialExposure: IndustrialExposure;
}

@Component({
  selector: 'app-industrial-exposure-form',
  templateUrl: './industrial-exposure-form.component.html',
  //   styleUrls: ['./education-form.component.css'],
})
export class IndustrialExposureFormComponent implements OnInit {
  industrialExposureForm: FormGroup;
  monthArray = ['Jaunary', 'February','March','April','May','June','July','Augest','September','Octomber','November','December'];

  constructor(
    public dialogRef: MatDialogRef<IndustrialExposureFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataType,
    private resumeRepo: ResumeRepository, private alertService: AlertService
  ) {}

  ngOnInit(): void {
      const organisation = this.data.industrialExposure ? this.data.industrialExposure.organisation : null;
      const city = this.data.industrialExposure ? this.data.industrialExposure.city : null;
      const state = this.data.industrialExposure ? this.data.industrialExposure.state : null;
      const startMonth = this.data.industrialExposure ? this.data.industrialExposure.start_month : null;
      const startYear = this.data.industrialExposure ? this.data.industrialExposure.start_year : null;
      const endMonth = this.data.industrialExposure ? this.data.industrialExposure.end_month : null;
      const endYear = this.data.industrialExposure ? this.data.industrialExposure.end_year : null;
      const work = this.data.industrialExposure ? this.data.industrialExposure.work : null;

    this.industrialExposureForm = new FormGroup({
      organisation: new FormControl(organisation, [Validators.required]),
      city: new FormControl(city, [Validators.required]),
      state: new FormControl(state, [Validators.required]),
      start_month: new FormControl(startMonth, [Validators.required]),
      start_year: new FormControl(startYear, [Validators.required]),
      end_month: new FormControl(endMonth),
      end_year: new FormControl(endYear),
      work: new FormControl(work, [Validators.required])
    })
  }

  addOrUpdate() {
    if (this.data.industrialExposure._id) {
      this.update();
    } else {
      this.save();
    }
  }

  save() {
    const observer$ = this.resumeRepo.addIndustrialExposure(this.industrialExposureForm.value, this.data.resumeId)
    observer$.subscribe(data=>{
      this.alertService.success('Industrial Exposure added successfully')
      this.dialogRef.close();
    }, error=>{
      this.alertService.error(error);
    })
  }

  update() {
    const observer$ = this.resumeRepo.updateIndustrialExposure(this.industrialExposureForm.value, this.data.industrialExposure._id, this.data.resumeId)
    observer$.subscribe(data=>{
      this.alertService.success('Industrial Exposure updated successfully')
      this.dialogRef.close();
    }, error=>{
      this.alertService.error(error);
    })
  }
}
