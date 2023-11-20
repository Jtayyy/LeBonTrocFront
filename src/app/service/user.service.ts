import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) { this.usersUrl = 'http://localhost:8080/users'; }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public findById(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url);
  }

  public register(userDto: any): Observable<void> {
    const url = `${this.usersUrl}/register`;
    return this.http.post<void>(url, userDto);
  }

  public login(userDto: any): Observable<void> {
    const url = `${this.usersUrl}/login`;
    return this.http.post<void>(url, userDto);
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

  public getFavoritesByUserId(id: number): Observable<Object[]> {
    const url = `${this.usersUrl}/${id}/favorites`;
    return this.http.get<Object[]>(url);
  }

}
