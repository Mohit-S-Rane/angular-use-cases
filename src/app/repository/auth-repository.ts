import { ApiService } from '../services/api-service';
import { Injectable } from '@angular/core';
import { combineLatest, map, Observable, take } from 'rxjs';
import { User } from '../models/user';
import { Store } from '@ngrx/store';
import { LoginRequestAction, LoginSuccessAction, LogoutAction, UserProfileRequestAction, UserProfileSuccessAction, UserUpdateAction } from '../actions/user-actions';
import { getUser, userLoggedIn, userLoggingIn } from '../reducers';
import { loggedIn, UserReducerState } from './../reducers/user-reducer';
import { RootReducerState } from './../reducers/index';
import { AuthUtils } from '../utility/auth-utils';


@Injectable()
export class AuthRepository {
  constructor(private apiService: ApiService, private store: Store<RootReducerState>) {}

  login(data: { email: string; password: string }): Observable<any> {
    this.store.dispatch(new LoginRequestAction());
    this.apiService.loginAndSetToken(data).subscribe((res) => {
      this.store.dispatch(new LoginSuccessAction(res));
    });
    return this.store.select(getUser);
  }

  signup(data: { email: string; password: string; confirm_password: string; name: string; job_category: string; experience_level: string; }): Observable<User> {
    return this.apiService.signup(data);
  }

  sendResetPasswordEmail(data: { email: string }): Observable<any> {
    return this.apiService.sendResetPasswordEmail(data);
  }

  resetPassword(data: { code: string; new_password: string; confirm_password: string; }): Observable<User> {
    return this.apiService.resetPassword(data);
  }

  fetchMe(force = false): Observable<User> {
    const loggedIn$ = this.store.select(userLoggedIn);
    const loggingIn$ = this.store.select(userLoggingIn);
    const user$ = this.store.select(getUser);
    combineLatest([loggedIn$, loggingIn$, user$]).pipe(take(1)).subscribe((data) => {
      if ((!data[0] && !data[1]) || force) {
        this.store.dispatch(new UserProfileRequestAction());
        this.apiService.fetchMe().subscribe((user) => {
          this.store.dispatch(new UserProfileSuccessAction(user));

        });
      }
    });
    return user$;
  }

  logout() {
    AuthUtils.removeAuthToken();
    this.store.dispatch(new LogoutAction());
  }

  updateProfile(data) {
    const userProfile = {...data, ...{job_category: 'abc', experience_level: 'das'}}
    return this.apiService.updateUserProfile(userProfile).pipe(map((res)=>{
      this.store.dispatch(new UserUpdateAction(res));
    }));
  }

  updatePassword(data) {
    return this.apiService.updatePassword(data);
  }
}
