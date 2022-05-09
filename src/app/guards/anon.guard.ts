import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthUtils } from './../utility/auth-utils';
import { ApiService } from 'src/app/services/api-service';
import { map } from "rxjs";

@Injectable()

export class AnonGuard implements CanActivate{
    constructor(private router: Router, private apiservice: ApiService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        // console.log('Token ' +AuthUtils.getAuthToken())
        if(!AuthUtils.getAuthToken()){
            return true
        } else {
            return this.apiservice.fetchMe().pipe(map(data =>{
                if(!data.verified){
                    this.router.navigate(['verified'])
                } else if(data.onboarding !== 200){
                    this.router.navigate(['onboarding'])
                } else {
                    this.router.navigate(['dashboard'])
                }
            }))
        }
    }

}