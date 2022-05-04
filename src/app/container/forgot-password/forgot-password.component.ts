import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api-service';
import { AlertService } from './../../services/alert-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  loading: boolean = false;
  forgotPasswordForm: FormGroup;
  isEmailSend = false;
  constructor(private apiService: ApiService, private alertService: AlertService, private router: Router) {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl(null, !this.isEmailSend ? [Validators.required] : []),
      code: new FormControl(null, []),
      new_password: new FormControl(null, []),
      confirm_password: new FormControl(null, []),
    });
  }
 
  sendEmail() {
    this.loading = true;
    this.apiService.sendResetPasswordEmail(this.forgotPasswordForm.value).subscribe((data)=>{
      this.loading = false;
      this.isEmailSend = true;
      this.alertService.success('Email has been send to ' + this.forgotPasswordForm.get('email')?.value)
      this.forgotPasswordForm.get('code')?.setValidators([Validators.required])
      this.forgotPasswordForm.get('new_password')?.setValidators([Validators.required])
      this.forgotPasswordForm.get('confirm_password')?.setValidators([Validators.required])  
    }, (error)=>{
      this.loading = false;
    })
  }

  changePassword() {
    this.loading = true;
    const observer$ = this.apiService.resetPassword(this.forgotPasswordForm.value);
    observer$.subscribe(data=>{
      this.loading = false;
      this.alertService.success('Password updated successfully');
      this.router.navigate(['login']);
      console.log(data);
    },(error)=>{
      this.loading = false;
      this.alertService.error(error.message);
    })
  }
}
