import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { map, takeWhile } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthRepository } from 'src/app/repository/auth-repository';
@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css'],
})
export class ProfileSettingComponent implements OnDestroy, OnInit{
  form: FormGroup;
  isAlive = true;
  user: User;

  constructor(private authRepo: AuthRepository) {}

  ngOnInit(): void {
    this.initUser();
    const name = this.user ? this.user.name : null;
    this.form = new FormGroup({
        name: new FormControl(name, [Validators.required])
    })
  }

  ngOnDestroy(): void {
    this.isAlive = false;      
  }

  initUser() {
      this.authRepo.fetchMe().pipe(takeWhile(()=> this.isAlive)).subscribe(user =>{
        this.user = user;        
      })
  }
  update() {
      this.authRepo.updateProfile(this.form.value).pipe(takeWhile(()=> this.isAlive)).subscribe(data=>{

      })
  }
}

