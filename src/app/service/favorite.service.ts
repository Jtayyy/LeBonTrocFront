import { Injectable } from '@angular/core';
import {Post} from "../model/post";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Favorite} from "../model/favorite";

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private apiUrl = 'http://localhost:8080/favorite-posts'
  constructor(private http: HttpClient) {}

  addFavorite(favoritePost: Favorite): Observable<void> {
    return this.http.post<void>(this.apiUrl, favoritePost);
  }

  removeFavorite(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
