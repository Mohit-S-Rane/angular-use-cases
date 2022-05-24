import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, takeWhile } from 'rxjs';
import { AlertService } from 'src/app/services/alert-service';
import { ApiService } from 'src/app/services/api-service';
import { AuthRepository } from './../../repository/auth-repository';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnDestroy{
  loginForm: FormGroup;
  loading = false;
  isAlive = true;

  constructor( private authRepo: AuthRepository, private alertService: AlertService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(8), Validators.minLength(4)]),
      confirm_password: new FormControl(null, [Validators.required, Validators.maxLength(8), Validators.minLength(4)]),
      name: new FormControl(null, [Validators.required]),
      job_category: new FormControl(null, [Validators.required]),
      experience_level: new FormControl(null, [Validators.required]),
    });
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  login() {
    this.loading = true;
    const userEmail = this.loginForm.value.email;
    this.router.navigate(['verify'], {queryParams: { email: userEmail }});
    const response$ = this.authRepo.login(this.loginForm.value);
    response$.pipe(takeWhile(() => this.isAlive), filter(res => !!res)).subscribe((data) => {
        this.loading = false;
        this.alertService.success('User Login successfully...');
        this.router.navigate(['verify'], {queryParams: { email: data.email }});
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
