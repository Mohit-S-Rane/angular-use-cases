import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthRepository } from 'src/app/repository/auth-repository';
import { takeWhile } from 'rxjs';
import { AlertService } from './../../services/alert-service';
@Component({
  selector: 'app-password-setting',
  templateUrl: './password-setting.component.html',
  styleUrls: ['./password-setting.component.css'],
})
export class PasswordSettingComponent implements OnInit, OnDestroy {
  form: FormGroup;
  isAlive = true;
  constructor(private authRepo: AuthRepository, private alertService: AlertService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      old_password: new FormControl(null, [Validators.required]),
      new_password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirm_password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    });
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  updatePassword() {
    this.authRepo.updatePassword(this.form.value).pipe(takeWhile(()=> this.isAlive)).subscribe(data => {
      this.alertService.success('Password changed successfully');
    }, error => {
      this.alertService.error(error);
    })
  }
}
