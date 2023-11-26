import {User} from "./user";
import {Post} from "./post";

export class Item {

  id: number;
  user: User;
  name: string;
  image: string;
  description: string;
  condition: string;
  type: string;
  value: number;
  posts: Post[];


  constructor(id: number, user: User, name: string, image: string, description: string, condition: string, type: string, value: number, posts: Post[]) {
    this.id = id;
    this.user = user;
    this.name = name;
    this.image = image;
    this.description = description;
    this.condition = condition;
    this.type = type;
    this.value = value;
    this.posts = posts;
  }
}
