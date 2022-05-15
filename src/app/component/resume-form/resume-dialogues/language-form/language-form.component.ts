import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api-service';
import { Education } from './../../../../models/education';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Skill } from 'src/app/models/skill';
import { AlertService } from 'src/app/services/alert-service';
import { Language } from 'src/app/models/language';

export interface DataType {
  resumeId: string;
  language: Language;
}

@Component({
  selector: 'app-language-form',
  templateUrl: './language-form.component.html',
  //   styleUrls: ['./education-form.component.css'],
})
export class LanguageFormComponent implements OnInit {
  levelArray = ['Beginner', 'Intermediate', 'Advance'];
  languageForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<LanguageFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataType,
    private apiService: ApiService, private alertService: AlertService
  ) {}

  ngOnInit(): void {
    const name = this.data.language ? this.data.language.name : null;
    const level = this.data.language ? this.data.language.level : null;

    this.languageForm = new FormGroup({
      name: new FormControl(name, [Validators.required]),
      level: new FormControl(level, [Validators.required])
    })
    
  }

  addOrUpdate(){
    if(this.data.language._id){
      this.update()
    } else (
      this.save()
    )
  }

  save() {
    const observer$ = this.apiService.addLanguage(this.languageForm.value, this.data.resumeId);
    observer$.subscribe(data=>{
      this.alertService.success('Language added successfully');
      this.dialogRef.close();
    })
  }

  update() {
    const observer$ = this.apiService.updateLanguage(this.languageForm.value, this.data.language._id);
    observer$.subscribe(data=>{
      this.alertService.success('Language updated successfully')
      this.dialogRef.close();
    })

}
}
