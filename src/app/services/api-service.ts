import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpService } from './http-service';

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

  login(data: { email: string; password: string }): Observable<User> {
    return this.httpService.get('/user/login', data);
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
}
