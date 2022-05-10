import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-resume-name',
  templateUrl: './resume-name.component.html',
  styleUrls: ['./resume-name.component.css'],
})
export class ResumeNameComponent implements OnInit {
  resumeForm: FormGroup;
  isCompleted = false;
  loading = false;

  constructor() {}
  ngOnInit() {
    this.resumeForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
    });
  }

  createResume() {
    this.isCompleted = true;
      console.log('called');
      
  }
}
