import { Component } from '@angular/core';
import {Post} from "../../model/post";
import {PostService} from "../../service/post.service";
import {NavbarService} from "../../service/navbar.service";

@Component({
  selector: 'marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent{

  posts: Post[] = [];
  searchType: String = "Tout";

  constructor(private postService: PostService, private navbarService: NavbarService) {
    this.getPosts();
    this.navbarService.sharedTypeSearch$.subscribe((data) => {
      this.searchType = data;
      this.getPosts();
    });

  }

  getPosts() {
    console.log("this.searchType", this.searchType)
    if(this.searchType == "Tout"){
      this.postService.getAllPosts().subscribe(
        (posts) => {
          this.posts = posts;
        },
        (error) => {
          console.error('Error fetching posts:', error);
        }
      );
    }
    else{
      this.postService.getPostsByObjectType(this.searchType).subscribe(
        (posts) => {
          this.posts = posts;
        },
        (error) => {
          console.error('Error fetching posts:', error);
        }
      );
    }

  }

}
