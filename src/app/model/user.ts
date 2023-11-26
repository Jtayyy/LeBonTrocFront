import {Item} from "./item";
import {Post} from "./post";

export class User {
  id: number
  firstname: string;
  lastname: string;
  pseudo: string;
  password: string;
  email: string;
  birthdate: Date;
  address: string;
  admin: boolean;
  items: Item[];
  favorite_posts: Post[];

  constructor(id: number, firstname: string, lastname: string, pseudo: string, password: string, email: string, birthdate: Date, address: string, admin: boolean, items: Item[], favorite_posts: Post[]) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.pseudo = pseudo;
    this.password = password;
    this.email = email;
    this.birthdate = birthdate;
    this.address = address;
    this.admin = admin;
    this.items = items;
    this.favorite_posts = favorite_posts;
  }
}


