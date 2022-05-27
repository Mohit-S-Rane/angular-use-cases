import { Component } from '@angular/core';
import { AuthRepository } from './../../repository/auth-repository';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
//   styleUrls: ['./logout.component.css'],
})
export class LogoutComponent {
  constructor(private authRepo: AuthRepository, private router: Router) {
      this.authRepo.logout();
      this.router.navigate(['']);
  }
}
