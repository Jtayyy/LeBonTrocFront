import { Component } from '@angular/core';
import {Post} from "../../model/post";
import {PostService} from "../../service/post.service";

@Component({
  selector: 'marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent {

  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getAllPosts().subscribe(
      (posts) => {
        this.posts = posts;
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }
  // receiveObject(post: Post) {
  //   // La méthode receiveObject est appelée lorsque l'enfant renvoie l'objet.
  //   console.log('Objet reçu de l\'enfant :', post);
  // }

}
