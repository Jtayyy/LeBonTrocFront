import {Object} from "./object";

export class User {
  id: number;
  firstname: string;
  lastname: string;
  pseudo:string;
  password: string;
  email: string;
  birthdate: void ;
  address: string;
  admin: boolean;
  objects: Object[];

  constructor(id: number, firstname: string, lastname: string, pseudo: string, password: string, email: string, birthdate: void, address: string, admin: boolean, objects: Object[]) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.pseudo = pseudo;
    this.password = password;
    this.email = email;
    this.birthdate = birthdate;
    this.address = address;
    this.admin = admin;
    this.objects = objects
  }
}
