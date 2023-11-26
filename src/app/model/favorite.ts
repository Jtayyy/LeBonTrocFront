import {User} from "./user";
import {Post} from "./post";

export class Favorite {

  id: number;
  user:User|null;
  post:Post;


  constructor(id: number, user: User | null, post: Post) {
    this.id = id;
    this.user = user;
    this.post = post;
  }
}
