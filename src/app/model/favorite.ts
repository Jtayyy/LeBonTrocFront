import {User} from "./user";
import {Post} from "./post";

export class Favorite {

  user:User|null;
  post:Post;


  constructor(user: User | null, post: Post) {
    this.user = user;
    this.post = post;
  }
}
