import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {favPost} from "../model/favPost";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'http://localhost:8080/posts'
  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<favPost[]> {
    return this.http.get<favPost[]>(this.apiUrl);
  }

  getPostById(id: number): Observable<favPost> {
    return this.http.get<favPost>(`${this.apiUrl}/${id}`);
  }

  addPost(post: favPost): Observable<void> {
    return this.http.post<void>(this.apiUrl, post);
  }

  updatePost(id: number, post: favPost): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${id}`, post);
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
