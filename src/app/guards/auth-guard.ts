import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthUtils } from './../utility/auth-utils';
@Injectable()

export class AuthGuard implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        console.log(AuthUtils.getAuthToken());
        return !!AuthUtils.getAuthToken(); /* Convert string to boolean by using !! */
    }
    
}