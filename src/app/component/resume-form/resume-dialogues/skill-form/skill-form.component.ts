import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api-service';
import { Education } from './../../../../models/education';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Skill } from 'src/app/models/skill';
import { AlertService } from 'src/app/services/alert-service';

export interface DataType {
  resumeId: string;
  skill: Skill;
}

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  //   styleUrls: ['./education-form.component.css'],
})
export class SkillFormComponent implements OnInit {
  skillLevelArray = ['Beginner', 'Intermediate', 'Advance'];
  skillForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<SkillFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataType,
    private apiService: ApiService, private alertService: AlertService
  ) {}

  ngOnInit(): void {
    const skill = this.data.skill ? this.data.skill.skill : null;
    const level = this.data.skill ? this.data.skill.level : null;

    this.skillForm = new FormGroup({
      skill: new FormControl(skill, [Validators.required]),
      level: new FormControl(level, [Validators.required])
    })
    
  }

  addOrUpdate(){
    if(this.data.skill._id){
      this.update()
    } else (
      this.save()
    )
  }

  save() {
    const observer$ = this.apiService.addSkill(this.skillForm.value, this.data.resumeId);
    observer$.subscribe(data=>{
      this.alertService.success('Skill added successfully');
      this.dialogRef.close();
    }, error=>{
      this.alertService.error(error)
    })
  }

  update() {
    const observer$ = this.apiService.updateSkill(this.skillForm.value, this.data.skill._id);
    observer$.subscribe(data=>{
      this.alertService.success('Skill updated successfully')
      this.dialogRef.close();
    }, error=>{
      this.alertService.error(error)
    })
  }

}
