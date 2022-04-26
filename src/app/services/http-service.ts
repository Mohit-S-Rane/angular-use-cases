import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertService } from './alert-service';
import { catchError, throwError } from 'rxjs';

@Injectable()
export class HttpService {
  private base_url = 'https://reqres.in/a1pi';

  constructor(private httpClient: HttpClient, private alertService: AlertService) {

  }

  get(url?: string, paramData?: any) {
    const data = { params: paramData };
    return this.httpClient.get(this.base_url + url, data).pipe(catchError(this.errorHandler.bind(this)));
  }

  private errorHandler(res: any) {
    const error = res.error;
    const keys = Object.keys(error);
    const key = keys[0];
    let message = error[key];
    const status = res.status;

    if(status === 401){
      // logout user and redirect to Login Page
    }

    if(error[key] instanceof Array){
      message = error[key][0];
    }

    if(key === 'isTrusted'){
      this.alertService.error('Please connect to internet connection')
    }else {
      this.alertService.error(message)
    }

    this.alertService.error(message);
    return throwError({message, error})
  }
}
