import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";
import {FavoriteService} from "../../service/favorite.service";
import {Favorite} from "../../model/favorite";
import {UserRegisterDto} from "../../model/user.dto";
import {UserService} from "../../service/user.service";


export class Post {
  object: string;
  title:string;
  user:string;
  publication: string;
  description: string;
  address: string;

  constructor(object: string, title: string, user: string, publication: string, description: string, adresse: string) {
    this.object = object;
    this.title = title;
    this.user = user;
    this.publication = publication;
    this.description = description;
    this.address = adresse;
  }
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {

  @Input() receivedObject: any;
  @Output() childObject: EventEmitter<any> = new EventEmitter<any>();

  constructor(private favoriteService: FavoriteService, private router: Router, private user: UserService) {
  }

  addFavorites(): void{
    const favoritePost: Favorite = new Favorite(this.user.userValue,this.receivedObject);
    this.favoriteService.addFavorite(favoritePost).subscribe(
      (response) => {
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Erreur lors de l\'inscription', error);
      }
    );
  }

  // removeFavorites(): void{
  //   const favoritePost: Favorite = new Favorite(this.user.userValue,this.receivedObject);
  //   this.favoriteService.removeFavorite(this.).subscribe(
  //       (response) => {
  //         this.router.navigate(['/']);
  //       },
  //       (error) => {
  //         console.error('Erreur lors de l\'inscription', error);
  //       }
  //   );
  //}
}
