import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";
import {FavoriteService} from "../../service/favorite.service";
import {Favorite} from "../../model/favorite";
import {UserService} from "../../service/user.service";
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
  isFavorite: boolean = false;

  constructor(private favoriteService: FavoriteService, private router: Router, private user: UserService) {
  }

  addFavorites(): void{
    const favoritePost: Favorite = new Favorite(0,this.user.userValue,this.receivedObject);
    this.favoriteService.addFavorite(favoritePost).subscribe(
      (response) => {
        this.isFavorite = true;
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Erreur lors de l\'inscription', error);
      }
    );
  }

  removeFavorites(): void {
    console.log('Le post', this.receivedObject.id);
    this.favoriteService.removeFavorite(this.receivedObject.id).subscribe(
               (response) => {
                 this.isFavorite = false;
               },
               (error) => {
                 console.error('Erreur lors de la suppression des favoris', error);
               }
           );
  }
}
