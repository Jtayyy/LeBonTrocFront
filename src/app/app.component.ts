import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "./model/user";
import {UserService} from "./service/user.service";

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
              private userService: UserService
  ) {
    this.userService.user.subscribe(x => this.current_user = x);
    console.log("Current User : ", this.current_user?.pseudo)
  }

}
