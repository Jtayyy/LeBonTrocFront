import { Component } from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../service/user.service";
import {Object} from "../../model/object";
import {favPost} from "../../model/favPost";
import {NewPostComponent} from "../../components/new-post/new-post.component";
import {MatDialog} from "@angular/material/dialog";
import {Post} from "../../components/post/post.component";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  file: string = '';
  currentUser: User|null;
  userObjects:Object[] = [];
  userPosts: Post[] = [];
  favoritesPosts:Post[] = [];
  likedPosts: Post[] = [];

  constructor(private userService: UserService, public dialog: MatDialog) {
    this.currentUser = this.userService.userValue;
    if(this.currentUser){
      this.userService.getObjectsOfUser(this.currentUser.id).subscribe(
        objects => {
          this.userObjects = objects;
        });
      this.userService.getFavoritesByUserId(this.currentUser.id).subscribe(
        posts => {
          this.favoritesPosts = posts;
        });
      this.userService.getPostsOfUser(this.currentUser.id).subscribe(
          posts => {
            this.userPosts = posts;
            console.log(this.userPosts);
          });
      this.userService.getPostsLikedByOtherByUserId(this.currentUser.id).subscribe(
          posts => {
            this.likedPosts = posts;
            console.log(this.likedPosts);
          });
    }
  }

  onFileChange(event: any) {
    const files = event.target.files as FileList;

    if (files.length > 0) {
      const _file = URL.createObjectURL(files[0]);
      this.file = _file;
      this.resetInput();
    }

  }

  resetInput(){
    const input = document.getElementById('avatar-input-file') as HTMLInputElement;
    if(input){
      input.value = "";
    }
  }

  openNewPostForm(){
    this.dialog.open(NewPostComponent);
  }
}
