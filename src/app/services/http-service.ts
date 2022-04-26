import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {
  private base_url = 'https://reqres.in/api';

  constructor(private httpClient: HttpClient) {

  }

  get(url?: string, paramData?: any) {
    const data = { params: paramData };
    return this.httpClient.get(this.base_url + url, data);
  }
}
