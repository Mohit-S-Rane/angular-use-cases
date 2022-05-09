import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-on-boarding-intro',
  templateUrl: './on-boarding-intro.component.html',
  styleUrls: ['./on-boarding-intro.component.css'],
})
export class OnBoardingIntroComponent implements OnInit {

  constructor(private router: Router) {}
    ngOnInit(): void {
    }

    navigateToOnBoard(){
      this.router.navigate(['on-boarding','add'])
    }
}
