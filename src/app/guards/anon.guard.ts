import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthUtils } from './../utility/auth-utils';

@Injectable()

export class AnonGuard implements CanActivate{
    constructor(private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        // console.log('Token ' +AuthUtils.getAuthToken())
        if(!AuthUtils.getAuthToken()){
            return true
        } else {
            this.router.navigate(['verify'])
        }
    }

}