import { Injectable } from '@angular/core';
import {User} from "./app.component";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  // constructor() {
  //   this.userSubject = new BehaviorSubject<User>(new User("Aurélien", "aaa"));
  //   this.user = this.userSubject.asObservable();
  // }
  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(new User("Aurélien", "aaa"));
    this.user = this.userSubject.asObservable();
  }


  public get userValue(): User {
    return this.userSubject.value;
  }

  login(username: string, password: string) {
     return this.http.post<any>(`http://localhost:8080/users/login`, { email:username, password })
       .subscribe(
         user => {
      this.userSubject.next(user);
    },
      error => {
        console.error('Authentication failed', error);
      }
  );
  }

  // logout() {
  //   // remove user from local storage to log user out
  //   localStorage.removeItem('user');
  //   this.userSubject.next(null);
  //   this.router.navigate(['/login']);
  // }
}
