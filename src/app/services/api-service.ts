import { Injectable } from '@angular/core';
import { HttpService } from './http-service';

@Injectable()
export class ApiService {
  constructor(private httpService: HttpService) {
      
  }

  getUsers() {
    return this.httpService.get('/users');
  }
}