import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, Observable, throwError} from "rxjs";
import {User} from "../model/user";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";
import {UserLoginDto} from "../model/user.dto";
import {Object} from "../model/object";
import {Post} from "../model/post";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;
  private userSubject: BehaviorSubject<User|null>;
  public user: Observable<User|null>;

  constructor(private http: HttpClient, private router: Router) {
    this.usersUrl = 'http://localhost:8080/users';
    this.userSubject = new BehaviorSubject<User|null>(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public findById(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url);
  }

  public register(userDto: UserLoginDto): Observable<void> {
    const url = `${this.usersUrl}/register`;
    return this.http.post<void>(url, userDto);
  }

  public get userValue(): User|null {
    return this.userSubject.value;
  }

  public login(userLoginDto : UserLoginDto) {
    const url = `${this.usersUrl}/login`;
    return this.http.post<User>(url, userLoginDto)
      .pipe(map(user => {
          console.log("Après la requête HTTP avec succès. Utilisateur reçu :", user);
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          console.log("user", user)
          this.router.navigate(['']);
        }),
    catchError(error => {
      console.error('Erreur lors de la connexion :', error);
      return throwError('Échec de la connexion. Veuillez vérifier vos informations d\'identification.');
    }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

  public update(id: number, userDto: any): Observable<void> {
    const url = `${this.usersUrl}/${id}/update`;
    return this.http.post<void>(url, userDto);
  }

  public delete(id: number): Observable<void> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  public getObjectsOfUser(id: number): Observable<Object[]> {
    const url = `${this.usersUrl}/${id}/objects`;
    return this.http.get<Object[]>(url);
  }

  public getFavoritesByUserId(id: number): Observable<Post[]> {
    const url = `${this.usersUrl}/${id}/favorites`;
    return this.http.get<Post[]>(url);
  }

}
