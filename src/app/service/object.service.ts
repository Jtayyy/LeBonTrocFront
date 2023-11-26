// object.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Object} from "../model/object";
import {Post} from "../model/post";

@Injectable({
  providedIn: 'root'
})
export class ObjectService {
  private apiUrl = 'http://localhost:8080/objects';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Object[]> {
    return this.http.get<Object[]>(this.apiUrl);
  }

  findById(id: number): Observable<Object> {
    return this.http.get<Object>(`${this.apiUrl}/${id}`);
  }

  add(object: Object): Observable<void> {
    return this.http.post<void>(this.apiUrl, object);
  }

  update(id: number, object: Object): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${id}`, object);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getPostsOfObject(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/${id}/posts`);
  }
}
