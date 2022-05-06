import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api-service';

@Injectable()

export class AuthGuard implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        console.log(ApiService.getAuthToken());
        return !!ApiService.getAuthToken(); /* Convert string to boolean by using !! */
    }
    
}