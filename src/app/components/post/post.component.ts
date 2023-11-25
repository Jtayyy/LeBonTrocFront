import {Component, EventEmitter, Input, Output} from '@angular/core';


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

  sendObjectToParent() {
    const responseObject = {
      message: 'Objet reçu de l\'enfant',
      data: this.receivedObject
    };
    this.childObject.emit(responseObject);
  }

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'antiquewhite'},
    {text: 'Two', cols: 1, rows: 2, color: 'moccasin'},
    {text: 'Three', cols: 1, rows: 1, color: '#D2AB99'},
    {text: 'Four', cols: 2, rows: 1, color: 'sandybrown'},
  ];

}
