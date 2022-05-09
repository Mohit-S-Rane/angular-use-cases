import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map, Observable } from "rxjs";
import { ApiService } from 'src/app/services/api-service';

@Injectable()
export class VerificationInComplete implements CanActivate{
    constructor(private apiService: ApiService, private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        return this.apiService.fetchMe().pipe(map(data =>{
            if(!data.verified){
                return true;
            } else {
                return this.router.navigate(['dashboard']);
            }
        }))
    }

}