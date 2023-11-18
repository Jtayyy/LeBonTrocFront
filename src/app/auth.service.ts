import { Injectable } from '@angular/core';
import {User} from "./app.component";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor() {
    this.userSubject = new BehaviorSubject<User>(new User("Aurélien", "aaa"));
    this.user = this.userSubject.asObservable();
  }
  // constructor(
  //   private router: Router,
  //   private http: HttpClient
  // ) {
  //   this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
  //   this.user = this.userSubject.asObservable();
  // }


  public get userValue(): User {
    return this.userSubject.value;
  }

  login(username: string, password: string) {
    // return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
    //   .pipe(map(user => {
    //     // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
    //     user.authdata = window.btoa(username + ':' + password);
    //     localStorage.setItem('user', JSON.stringify(user));
    //     this.userSubject.next(user);
    //     return user;
    //   }));
    return new User(username, password);
  }

  // logout() {
  //   // remove user from local storage to log user out
  //   localStorage.removeItem('user');
  //   this.userSubject.next(null);
  //   this.router.navigate(['/login']);
  // }
}
