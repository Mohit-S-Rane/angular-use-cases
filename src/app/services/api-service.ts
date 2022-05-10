import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpService } from './http-service';
import { AuthUtils } from './../utility/auth-utils';
import { Resume } from '../models/resume';

@Injectable()
export class ApiService {

  constructor(private httpService: HttpService) {}

  signup(data: {
    email: string;
    password: string;
    confirm_password: string;
    name: string;
    job_category: string;
    experience_level: string;
  }): Observable<User> {
    return this.httpService.post('/user/signup', data);
  }

  loginAndSetToken(data: { email: string; password: string }): Observable<User> {
    return this.httpService.get('/user/login', data).pipe(map(res=>{
      AuthUtils.setAuthToken(res.token)
      return res.data;
    }));
  }

  getUsers() {
    return this.httpService.get('/users');
  }

  sendResetPasswordEmail(data: { email: string }): Observable<any> {
    return this.httpService.get('/user/reset/password/email', data)
  }

  resetPassword(data: {code: string, new_password: string, confirm_password: string}): Observable<any> {
    return this.httpService.patch('/user/reset/password', data)
  }

  fetchMe(): Observable<User> {
    return this.httpService.get('/user/fetch');
  }

  fetchAllResume(): Observable<Resume[]> {
    return this.httpService.get('/resume/all')
  }

  saveResume(data: { name: string}) {
    return this.httpService.post('/resume/add/resume', data);
  }
}
