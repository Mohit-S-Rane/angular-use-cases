import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  observable,
  Observable,
  switchMap,
} from 'rxjs';

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

    // Debounce time & distinc until change
    const myObserver = this.loginForm.valueChanges.pipe(
      map((data) => {
        data.email;
      }),
      debounceTime(500),
      distinctUntilChanged()
    );

    myObserver.subscribe((data) => {
      console.log(data);
    });

    // Combine latest which use to merge two or more Observable and return when any value changes happen
    // const observableA = this.loginForm.valueChanges;
    // const observableB = new Observable((emitter) => {
    //   emitter.next('Hello');
    // });

    // combineLatest([observableA, observableB]).subscribe((data) => {
    //   console.log(data);
    // });
  }

  login() {}

  signup() {}
}
