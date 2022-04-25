import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-use-cases';
  loginForm: FormGroup;
  myObservable!: Observable<any>;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(4),
      ]),
    });
  }

  login() {
    this.myObservable = new Observable((emitter) => {
      emitter.next(this.loginForm.value);
      emitter.next('Hello');
    });

    this.myObservable.subscribe(data=>{
      console.log(data, 'Login function subscribe');
    })
  }

  signup() {
    this.myObservable.subscribe(data=>{
      console.log(data, 'Signup function subscribe');
    })
  }
}
