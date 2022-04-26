import { HttpClient } from '@angular/common/http';
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
  // private httpClient : HttpClient;  /*  First API Call */

  constructor(private httpClient: HttpClient) {
    // this.httpClient = httpClient;
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(4),
      ]),
    });

    const data: any = { page: 2 };
    this.httpClient.get('https://reqres.in/api/users', { params: data }).subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  login() {}

  signup() {}
}
