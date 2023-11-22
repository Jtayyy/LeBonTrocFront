import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    if (this.userService.userValue) {
      this.router.navigate(['/']);
    }
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  //Getter for the form fields
  get f() { return this.loginForm.controls; }

  public onLoginSubmit(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log("Service email = login email", this.f["email"].value);
    this.userService.login(this.f["email"].value, this.f["password"].value).subscribe(

    );
  }

  getErrorMessageEmail() {
    if (this.f["email"].hasError('required')) {
      return 'You must enter a value';
    }

    return this.f["email"].hasError('email') ? 'Not a valid email' : '';
  }
  getErrorMessagePassword() {
    if (this.f["password"].hasError('required')) {
      return 'You must enter a value';
    }

    return this.f["password"].hasError('password') ? 'Not a valid password' : '';
  }

}
