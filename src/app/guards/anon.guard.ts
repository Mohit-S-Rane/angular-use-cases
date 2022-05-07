import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthUtils } from './../utility/auth-utils';

@Injectable()

export class AnonGuard implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        return !AuthUtils.getAuthToken();
    }

}