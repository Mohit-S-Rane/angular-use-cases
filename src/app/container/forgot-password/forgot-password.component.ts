import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  loading: boolean = false;
  forgotPasswordForm: FormGroup;
  isEmailSend = false;
  constructor() {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl(null, !this.isEmailSend ? [Validators.required] : []),
      code: new FormControl(null, []),
      new_password: new FormControl(null, []),
      confirm_password: new FormControl(null, []),
    });
  }
 
  sendEmail() {
    this.isEmailSend = true;
    console.log('Send Email called');
    this.forgotPasswordForm.get('code')?.setValidators([Validators.required])
    this.forgotPasswordForm.get('new_password')?.setValidators([Validators.required])
    this.forgotPasswordForm.get('confirm_password')?.setValidators([Validators.required])
  }

  changePassword() {
    console.log(this.forgotPasswordForm.value);
  }
}
