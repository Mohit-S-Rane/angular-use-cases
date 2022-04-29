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
  constructor() {

    this.forgotPasswordForm = new FormGroup({
      email: new FormControl(null, [Validators.required])
    })
  }

  sendEmail() {
    console.log('Send Email called');
    
  }
}
