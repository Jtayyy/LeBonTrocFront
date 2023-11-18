import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";


export class User{
  username: string|null;
  password: string|null;
  constructor(username: string|null, password: string|null) {
    this.username = username;
    this.password = password;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isUserLoggedIn: boolean = true;
  email : string|null = "";
  password : string|null = "";
  current_user : User | null = null;

  constructor(private router: Router,
              private authenticationService: AuthService
  ) {
    this.authenticationService.user.subscribe(x => this.current_user = x);
    console.log("Current User : ", this.current_user?.username)
  }

}
