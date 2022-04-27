import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertService } from './alert-service';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class HttpService {
  private base_url = 'http://localhost:5000/api';

  constructor(
    private httpClient: HttpClient,
    private alertService: AlertService
  ) {}

  get(url?: string, paramData?: any): Observable<any> {
    const data = { params: paramData };
    return this.httpClient
      .get(this.base_url + url, data).pipe(catchError(this.errorHandler.bind(this)));
  }

  post(url: string, body: any): Observable<any> {
    return this.httpClient
      .post(this.base_url + url, body).pipe(catchError(this.errorHandler.bind(this)));
  }

  private errorHandler(response: any) {
    const error = response.error;
    const message = response.message;
    const status = response.status;
    if (status === 401) {
    }
    this.alertService.error(message);
    return throwError({ message, error });
  }
}
