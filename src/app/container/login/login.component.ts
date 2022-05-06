import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert-service';
import { ApiService } from 'src/app/services/api-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;

  constructor(
    private apiService: ApiService,
    private alertService: AlertService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(4),
      ]),
      confirm_password: new FormControl(null, [
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(4),
      ]),
      name: new FormControl(null, [Validators.required]),
      job_category: new FormControl(null, [Validators.required]),
      experience_level: new FormControl(null, [Validators.required]),
    });
  }

  login() {
    this.loading = true;
    const response$ = this.apiService.loginAndSetToken(this.loginForm.value);
    response$.subscribe(
      (data) => {
        this.loading = false;
        this.alertService.success('User Login successfully...');
        this.router.navigate(['verify']);
      },
      (error) => {
        this.loading = false;
        console.log(error);
        this.alertService.error(error.message);
      }
    );
  }

  signup() {
    this.router.navigate(['signup'])
    // this.apiService.signup(this.loginForm.value).subscribe(data=>{
    //   console.log('User added successfully');
    // this.apiService.getUsers().subscribe(res=>{
    //   this.alertService.success('done...!')
    // })
    // })
    // debugger

    // this.loading = true;
    // this.apiService.signup(this.loginForm.value).subscribe(
    //   (data) => {
    //     this.loading = false;
    //     this.alertService.success('User signup successfully...');
    //     console.log(data);
    //   },
    //   (error) => {
    //     this.loading = false;
    //     console.log(error.message);
    //   }
    // );
  }
}
