import {Item} from "./item";
export class Post {

  id: number;
  item: Item;
  title: string;
  publication: string;
  description: string;
  address: string;

  constructor(id: number, item: Item, title: string, publication: string, description: string, address: string) {
    this.id = id;
    this.item = item;
    this.title = title;
    this.publication = publication;
    this.description = description;
    this.address = address;
  }

}
