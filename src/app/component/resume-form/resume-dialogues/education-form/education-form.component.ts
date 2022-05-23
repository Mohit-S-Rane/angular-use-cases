import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api-service';
import { Education } from './../../../../models/education';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface DataType {
  resumeId: string;
  education: Education;
}

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  //   styleUrls: ['./education-form.component.css'],
})
export class EducationFormComponent implements OnInit {
  educationForm: FormGroup;
  monthArray = ['Jaunary', 'February','March','April','May','June','July','Augest','September','Octomber','November','December'];

  constructor(
    public dialogRef: MatDialogRef<EducationFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataType,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    const schoolName = this.data.education ? this.data.education.school_name : null;
    const city = this.data.education ? this.data.education.city : null;
    const state = this.data.education ? this.data.education.state : null;
    const field = this.data.education ? this.data.education.field : null;
    const degreeType = this.data.education ? this.data.education.degree_type : null;
    const graduationMonth = this.data.education ? this.data.education.graduation_month : null;
    const graduationYear = this.data.education ? this.data.education.graduation_year : null;
    const percentage = this.data.education ? this.data.education.percentage : null;
    this.educationForm = new FormGroup({
      school_name: new FormControl(schoolName, [Validators.required]),
      city: new FormControl(city, [Validators.required]),
      state: new FormControl(state, [Validators.required]),
      field: new FormControl(field, [Validators.required]),
      degree_type: new FormControl(degreeType, [Validators.required]),
      graduation_month: new FormControl(graduationMonth, [Validators.required]),
      graduation_year: new FormControl(graduationYear, [Validators.required]),
      percentage: new FormControl(percentage, [Validators.required]),
    });
  }

  addOrUpdate() {
    if (this.data.education._id) {
      this.update();
    } else {
      this.save();
    }
  }

  save() {
    debugger
    const observer$ = this.apiService.addEducation(this.educationForm.value, this.data.resumeId);
    observer$.subscribe(data=>{
      this.dialogRef.close();
    })
  }

  update() {
    debugger
    const observer$ = this.apiService.updateEducation(this.educationForm.value, this.data.education._id);
    observer$.subscribe(data=>{
      this.dialogRef.close();
    })
  }
}
