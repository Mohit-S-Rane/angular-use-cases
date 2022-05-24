import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert-service';
import { ApiService } from 'src/app/services/api-service';
import { AuthRepository } from './../../repository/auth-repository';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm: FormGroup;
  loading: boolean = false;
  constructor(private authRepository: AuthRepository, private alertService: AlertService, private router: Router) {
    this.signupForm = new FormGroup({
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

  signup(){
    this.loading = true;
    this.authRepository.signup(this.signupForm.value).subscribe(
      (data) => {
        this.loading = false;
        this.alertService.success('User signup successfully...');
        console.log(data);
      },
      (error) => {
        this.loading = false;
        console.log(error.message);
      }
    );
  }

  login(){
    this.router.navigate(['']);
  }
}
