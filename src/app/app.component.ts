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
  loading = false;

  constructor( private apiService: ApiService, private alertService: AlertService) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(8), Validators.minLength(4)]),
      confirm_password: new FormControl(null, [Validators.required, Validators.maxLength(8), Validators.minLength(4)]),
      name: new FormControl(null, [Validators.required]),
      job_category: new FormControl(null, [Validators.required]),
      experience_level: new FormControl(null, [Validators.required])
    });
  }

  login() {
    console.log(this.loginForm.value);
  }

  signup() {
    this.loading = true;
    this.apiService.signup(this.loginForm.value).subscribe((data)=>{
      this.loading = false;
      this.alertService.success('User signup successfully...')
      console.log(data);
    }, error=>{
      this.loading = false;
      console.log(error);
    })
  }
}
