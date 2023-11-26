import {Object} from "./object";
export class Post {

  id: number;
  object: Object;
  title: string;
  publication: string;
  description: string;
  address: string;

  constructor(id: number, object: Object, title: string, publication: string, description: string, address: string) {
    this.id = id;
    this.object = object;
    this.title = title;
    this.publication = publication;
    this.description = description;
    this.address = address;
  }

}
