import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { filter, map, observable, Observable, switchMap } from 'rxjs';

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
    this.buySugarFromShop();
  }

  // Switch Map Operator
  // Example
  buySugarInBulk() {
    return new Observable((emitter) => {
      emitter.next('Sugar is purchase');
    });
  }

  buySugarInQuantity(quantity: any) {
    return new Observable((emitter) => {
      emitter.next('Sugar with Quantity: ' + quantity + ' is here for you');
    });
  }

  buySugarFromShop() {
    // observable A is depending on observable B
    // Which return a required observable B using Switch Map
    // we need to observe value of Second value only
    // this.buySugarInBulk().subscribe((data) => {
    //   this.buySugarInQuantity('1Kg').subscribe((res) => {
    //     console.log(res);
    //   });
    // });

    // We will write this by using Switch Map

    const myObservable = this.buySugarInBulk().pipe(
      switchMap(() => {
        return this.buySugarInQuantity('2Kg');
      })
    );

    myObservable.subscribe((data) => {
      console.log(data);
    });
  }

  login() {
    // Map Operator = used as Guard
    const myObserver = this.loginForm.valueChanges.pipe(
      map((data) => {
        return data.password;
      })
    );

    myObserver.subscribe((data) => {
      console.log(data);
    });

    // Filter Operator = which filter data based on given condition
    const filterObserver = this.loginForm.valueChanges.pipe(
      filter((data) => {
        return data.email === 'abc@gmail.com';
      })
    );

    filterObserver.subscribe((data) => {
      console.log(data);
    });
  }

  signup() {
    this.myObservable.subscribe((data) => {
      console.log(data, 'Signup function subscribe');
    });
  }
}
