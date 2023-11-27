// item.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Item} from "../model/item";
import {Post} from "../model/post";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'http://localhost:8080/items';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  findById(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.apiUrl}/${id}`);
  }

  add(item: Item): Observable<void> {
    return this.http.post<void>(this.apiUrl, item);
  }

  update(id: number, item: Item): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${id}`, item);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getPostsOfItem(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/${id}/posts`);
  }

  getUserByItemId(id: number|undefined): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}/user`);
  }
}
