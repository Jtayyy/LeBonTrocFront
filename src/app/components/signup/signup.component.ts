import { Component } from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../service/user.service";
import {UserRegisterDto} from "../../model/user.dto";
import {Router} from "@angular/router";

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent{

  user:UserRegisterDto = {
    firstname:"",
    lastname:"",
    password:"",
    pseudo:"",
    email:"",
    address:"",
    birthdate:null
  }
  constructor(private userService: UserService, private router: Router) { }

  signUp(userData: UserRegisterDto){
    console.log('user registered', userData);
    this.userService.register(userData).subscribe(
      (response) => {
      this.router.navigate(['/']);
      },
      (error) => {
        console.error('Erreur lors de l\'inscription', error);
      }
    );
  }
}
