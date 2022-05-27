import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertService } from './alert-service';
import { catchError, Observable, throwError } from 'rxjs';
import { ApiService } from './api-service';
import { AuthUtils } from './../utility/auth-utils';
import { Router } from '@angular/router';

@Injectable()
export class HttpService {
  private base_url = 'http://localhost:5000/api';

  constructor(
    private httpClient: HttpClient,
    private alertService: AlertService,
    private router: Router
  ) {}

  get(url?: string, paramData?: any): Observable<any> {
    const data = { params: paramData, headers: this.getAuthHeaders()};
    return this.httpClient
      .get(this.base_url + url, data).pipe(catchError(this.errorHandler.bind(this)));
  }

  post(url: string, body: any): Observable<any> {
    return this.httpClient
      .post(this.base_url + url, body, {headers: this.getAuthHeaders()}).pipe(catchError(this.errorHandler.bind(this)));
  }

  patch(url: string, body: any): Observable<any> {
    return this.httpClient
      .patch(this.base_url + url, body, {headers: this.getAuthHeaders()}).pipe(catchError(this.errorHandler.bind(this)));
  }

  delete(url: string, body?: any): Observable<any> {
    return this.httpClient.request('delete', this.base_url + url, {body, headers: this.getAuthHeaders()})
  }

  private getAuthHeaders() {
    return {
      Authorization: `Bearer ${AuthUtils.getAuthToken()}`
    }
  }

  private errorHandler(response: any) {
    const error = response.error;
    const keys = Object.keys(error);
    const key = keys[0];
    const message = response.message;
    const status = response.status;
    if (status === 401) {
      this.router.navigate(['logout']);
      this.alertService.message('Session Expired');
    }
    if (key === 'isTrusted') {
      this.alertService.error('Please connect to internet Connection');
    } else {
      this.alertService.error(message);
    }
    
    return throwError({message, error});
  }
}
