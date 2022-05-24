import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { filter, map, Observable, take } from "rxjs";
import { ApiService } from 'src/app/services/api-service';
import { AuthRepository } from 'src/app/repository/auth-repository';

@Injectable()
export class VerificationCompleted implements CanActivate{
    constructor(private authRepo: AuthRepository, private router: Router, private apiService: ApiService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        return this.authRepo.fetchMe().pipe( filter(data => !!data), map(data => {
            if(data.verified){
                return true;
            } else {
                return this.router.navigate(['verify']);
            }
        }))
    }

}