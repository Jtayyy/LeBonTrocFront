import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {UserService} from "./user.service";
@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(auth: ActivatedRouteSnapshot, router: RouterStateSnapshot) : boolean {

    const user = this.userService.userValue;
    if (user) {
      // logged in so return true
      console.log("Logged in : ", user);
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
