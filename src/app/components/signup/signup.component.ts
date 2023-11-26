import { Component } from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../service/user.service";
import {UserRegisterDto} from "../../model/user.dto";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {LoginComponent} from "../../pages/login/login.component";

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent{

  registerForm: FormGroup;
  submitted = false;


  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder, private dialogRef: MatDialogRef<SignupComponent>) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      pseudo: ['', Validators.required],
      address: ['', Validators.required],
      birthdate: [null, Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

  signUp(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    else{
      this.dialogRef.close(true);
      const userData: UserRegisterDto = {
        firstname: this.f["firstname"].value,
        lastname: this.f["lastname"].value,
        password: this.f["password"].value,
        pseudo: this.f["pseudo"].value,
        email: this.f["email"].value,
        address: this.f["address"].value,
        birthdate: this.f["birthdate"].value
      };
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

  getErrorMessageEmail() {
    if (this.f["email"].hasError('required')) {
      return 'Vous devez entrer une valeur pour l&#39email';
    }

    return this.f["email"].hasError('email') ? 'Email incorrect' : '';
  }


  getErrorMessagePassword() {
    if (this.f["password"].hasError('required')) {
      return 'Vous devez entrer une valeur de mot de passe';
    }

    return this.f["password"].hasError('password') ? 'Password incorrect' : '';
  }

  getErrorMessageFirstname() {
    if (this.f["firstname"].hasError('required')) {
      return 'Vous devez entrer une valeur pour votre prénom';
    }

    return this.f["firstname"].hasError('firstname') ? 'Not a valid firstname' : '';
  }

  getErrorMessageLastname() {
    if (this.f["lastname"].hasError('required')) {
      return 'Vous devez entrer une valeur pour votre nom';
    }

    return this.f["lastname"].hasError('lastname') ? 'Not a valid lastname' : '';
  }

  getErrorMessageAddress() {
    if (this.f["address"].hasError('required')) {
      return 'Vous devez entrer une valeur pour votre adresse';
    }

    return this.f["address"].hasError('address') ? 'Not a valid address' : '';
  }

  getErrorMessageBirthdate() {
    if (this.f["birthdate"].hasError('required')) {
      return 'Vous devez entrer une valeur de date de naissance';
    }

    return this.f["birthdate"].hasError('birthdate') ? 'Not a valid birthdate' : '';
  }

  getErrorMessagePseudo() {
    if (this.f["pseudo"].hasError('required')) {
      return 'Vous devez entrer une valeur pour votre pseudo';
    }

    return this.f["pseudo"].hasError('pseudo') ? 'Not a valid pseudo' : '';
  }

}
