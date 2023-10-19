import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  @Input() receivedObject: any;
  @Output() childObject: EventEmitter<any> = new EventEmitter<any>();

  sendObjectToParent() {
    // La méthode sendObjectToParent est appelée lorsque l'enfant répond avec l'objet.
    const responseObject = {
      message: 'Objet reçu de l\'enfant',
      data: this.receivedObject
    };
    this.childObject.emit(responseObject);
  }

}
