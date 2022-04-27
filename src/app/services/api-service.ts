import { Injectable } from '@angular/core';
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
  }) {
    return this.httpService.post('/user/signup', data);
  }

  login( data: {email: string, password: string}) {
    return this.httpService.get('/user/login', data);
  }

  getUsers() {
    return this.httpService.get('/users');
  }
}
