import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthUtils } from './../utility/auth-utils';
import { ApiService } from 'src/app/services/api-service';
import { filter, map, take } from "rxjs";
import { AuthRepository } from './../repository/auth-repository';

@Injectable()

export class AnonGuard implements CanActivate{
    constructor(private router: Router, private authRepo: AuthRepository){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        // console.log('Token ' +AuthUtils.getAuthToken())
        if(!AuthUtils.getAuthToken()){
            return true
        } else {
            const user$ = this.authRepo.fetchMe();
            return user$.pipe(filter(data => !!data),map(data =>{
                if(!data.verified){
                    this.router.navigate(['verified'])
                } else if(data.onboarding !== 200){
                    this.router.navigate(['on-boarding'])
                } else {
                    this.router.navigate(['dashboard'])
                }
            }))
        }
    }

}