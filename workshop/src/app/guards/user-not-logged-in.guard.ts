import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class UserNotLoggedInGuard implements CanActivate {

    constructor(private router: Router) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
        return localStorage.getItem('user') == null ? true : this.router.parseUrl('/');
    }

}