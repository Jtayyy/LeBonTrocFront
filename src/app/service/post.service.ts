import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../model/post";
import {Item} from "../model/item";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'http://localhost:8080/posts'
  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }

  addPost(post: Post): Observable<void> {
    return this.http.post<void>(this.apiUrl, post);
  }

  updatePost(id: number, post: Post): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${id}`, post);
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getPostsByItemType(type: String): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/type/${type}`);
  }

  getItemByPostId(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.apiUrl}/${id}/item`);
  }

}
