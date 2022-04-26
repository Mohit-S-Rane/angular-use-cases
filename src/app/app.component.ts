import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from './services/api-service';

import {  BehaviorSubject,
          combineLatest,
          debounceTime,
          distinctUntilChanged,
          filter,
          map,
          observable,
          Observable,
          switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-use-cases';
  loginForm: FormGroup;

  constructor(private apiService: ApiService) {
    //  My Component -> Api Service -> https Service -> HTTP Client Module
    this.apiService.getUsers().subscribe(data=>{
      console.log(data);
      
    })

    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(4),
      ]),
    });
  }

  login() {}

  signup() {}
}
