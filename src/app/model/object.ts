import {User} from "./user";
import {Post} from "./post";

export class Object {

  id: number;
  user: User;
  name: string;
  image: string;
  description: string;
  condition: string;
  type: string;
  posts: Post[];


  constructor(id: number, user: User, name: string, image: string, description: string, condition: string, type: string, posts: Post[]) {
    this.id = id;
    this.user = user;
    this.name = name;
    this.image = image;
    this.description = description;
    this.condition = condition;
    this.type = type;
    this.posts = posts;
  }
}
