import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.auth.userValue;
    if (user) {
      // logged in so return true
      console.log("Logged in : ", user);
      return true;
    }
    else {
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
  }
}
