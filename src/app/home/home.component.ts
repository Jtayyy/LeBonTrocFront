import { Component } from '@angular/core';


class Post {
  object: string;
  title:string;
  user:string;
  publication: string;
  description: string;
  adresse: string;

  constructor(object: string, title: string, user: string, publication: string, description: string, adresse: string) {
    this.object = object;
    this.title = title;
    this.user = user;
    this.publication = publication;
    this.description = description;
    this.adresse = adresse;
  }
}

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  post_sweat = new Post("sweat", "sweat M neuf", "Aurélien","12/09/2023", "Pull de qualité supérieure mashallah", "43 rue Camille Desmoulin, Cachan")
  post_armoire = new Post("armoire", "armoire 1m90 bon état", "Paulin", "15/09/2023", "Armoire de qualité supérieure mashallah", "43 rue Camille Desmoulin, Cachan")
  post_ordinateur = new Post("ordinateur", "ordinateur HP i7", "Marion", "18/10/2023", "Mon pc est lent aujourd'hui je le donne gratos", "43 rue Camille Desmoulin, Cachan")


  posts: Post[] = [
    this.post_sweat,
    this.post_armoire,
    this.post_ordinateur,
  ];

  receiveObject(post: Post) {
    // La méthode receiveObject est appelée lorsque l'enfant renvoie l'objet.
    console.log('Objet reçu de l\'enfant :', post);
  }

}
