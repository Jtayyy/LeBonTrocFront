import {User} from "./user";
import {favPost} from "./favPost";

export class Favorite {

  user:User|null;
  post:favPost;


  constructor(user: User | null, post: favPost) {
    this.user = user;
    this.post = post;
  }
}
