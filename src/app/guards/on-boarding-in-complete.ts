import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { filter, map, Observable, take } from "rxjs";
import { AuthRepository } from "../repository/auth-repository";
import { ApiService } from "../services/api-service";

@Injectable()
export class OnBoardingInComplete implements CanActivate{
    constructor(private authRepo: AuthRepository, private router: Router, private apiService: ApiService) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        return this.authRepo.fetchMe().pipe(filter(data => !!data), map(data => {
            if(data.onboarding !== 200){
                return true;
            } else {
                return this.router.navigate(['dashboard'])
            }
        }))  
    }

}