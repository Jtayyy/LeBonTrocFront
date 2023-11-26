import {Object} from "./object";
import {favPost} from "./favPost";

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
  objects: Object[];
  favorite_posts: favPost[];

  constructor(id: number, firstname: string, lastname: string, pseudo: string, password: string, email: string, birthdate: Date, address: string, admin: boolean, objects: Object[], favorite_posts: favPost[]) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.pseudo = pseudo;
    this.password = password;
    this.email = email;
    this.birthdate = birthdate;
    this.address = address;
    this.admin = admin;
    this.objects = objects;
    this.favorite_posts = favorite_posts;
  }
}


