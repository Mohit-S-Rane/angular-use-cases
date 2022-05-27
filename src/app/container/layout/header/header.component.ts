import { Component } from '@angular/core';
import { AuthRepository } from 'src/app/repository/auth-repository';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent{
  userName = '';
  constructor(private authRepo: AuthRepository) {
      this.authRepo.fetchMe().subscribe(user => {
          this.userName = user.name;
      })
  }
}
