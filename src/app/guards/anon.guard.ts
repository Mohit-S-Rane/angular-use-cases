import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from "rxjs";
import { ApiService } from "../services/api-service";

@Injectable()

export class AnonGuard implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        return !ApiService.getAuthToken();
    }

}