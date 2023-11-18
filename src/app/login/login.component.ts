import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router) {
    if (this.auth.userValue) {
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
    this.auth.login(this.f["email"].value, this.f["password"].value);
    console.log("Service email = login email");
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
