import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertService } from './services/alert-service';
import { ApiService } from './services/api-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-use-cases';
  loginForm: FormGroup;

  constructor(
    private apiService: ApiService,
    private alertService: AlertService
  ) {
    //  My Component -> Api Service -> https Service -> HTTP Client Module
    this.apiService.getUsers().subscribe(
      (data) => {
        this.alertService.success('Done123!');
      },
      (error) => {
        console.log(error, 'App Component');
        
      }
    );

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
