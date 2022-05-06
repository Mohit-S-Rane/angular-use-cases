import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css'],
})

export class VerificationComponent {
  email: any;
  constructor(private activatedRoute: ActivatedRoute) {
    this.fetchEmail();
  }

  fetchEmail() {
    const email$ = this.activatedRoute.queryParams.pipe(map(data=>{ data['email']}))
    email$.subscribe(data =>{
      this.email = data;
    })
  }
}
