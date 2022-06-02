import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { Resume } from './../../../models/resume';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertService } from './../../../services/alert-service';
import { ResumeRepository } from './../../../repository/resume-repository';
import { takeWhile } from 'rxjs';
@Component({
  selector: 'app-share-resume',
  templateUrl: './share.component.html',
//   styleUrls: ['./share.component.css'],
})
export class ShareResumeComponent implements OnInit, OnDestroy{
  form: FormGroup;
  isAlive = true;
  link;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Resume,
               private dialogRef: MatDialogRef<ShareResumeComponent>,
               private alertService: AlertService, private resumeRepo: ResumeRepository) {
                   this.link = 'https://mohitsrane.com'
               }

  ngOnInit(): void {
 
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  copy() {}
 

}
