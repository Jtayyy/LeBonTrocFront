import {User} from "./user";
import {favPost} from "./favPost";

export class Object {

  id: number;
  user: User;
  name: string;
  image: string;
  description: string;
  condition: string;
  type: string;
  posts: favPost[];


  constructor(id: number, user: User, name: string, image: string, description: string, condition: string, type: string, posts: favPost[]) {
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
