import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { Resume } from './../../../models/resume';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertService } from './../../../services/alert-service';
import { ResumeRepository } from './../../../repository/resume-repository';
import { takeWhile } from 'rxjs';
@Component({
  selector: 'app-add-or-edit-resume',
  templateUrl: './add-or-edit-resume.component.html',
//   styleUrls: ['./add-or-edit-resume.component.css'],
})
export class AddOrEditResumeComponent implements OnInit, OnDestroy{
  form: FormGroup;
  isAlive = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Resume,
               private dialogRef: MatDialogRef<AddOrEditResumeComponent>,
               private alertService: AlertService, private resumeRepo: ResumeRepository) {}

  ngOnInit(): void {
    const name = this.data ? this.data.name : null;
    this.form = new FormGroup({
      name: new FormControl(name, [Validators.required])
    })
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  addOrUpdate() {
    debugger
    if(this.data){
      this.update();
    } else {
      this.add()
    }
  }

  add() {
    this.resumeRepo.saveResume(this.form.value).pipe(takeWhile(()=> this.isAlive)).subscribe(data => {
      this.alertService.success('Resume added successfully');
      this.dialogRef.close();
    })
  }

  update() {
    this.resumeRepo.editResume(this.form.value, this.data._id).pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.alertService.success('Resume updated successfully');
      this.dialogRef.close();
    })
  }

}
