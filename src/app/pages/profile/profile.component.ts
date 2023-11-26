import { Component } from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../service/user.service";
import {Object} from "../../model/object";
import {Post} from "../../model/post";
import {NewPostComponent} from "../../components/new-post/new-post.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  file: string = '';
  currentUser: User|null;
  userObjects:Object[] = [];
  favoritesPosts:Post[] = [];


  constructor(private userService: UserService, public dialog: MatDialog) {
    this.currentUser = this.userService.userValue;
    if(this.currentUser){
      this.userService.getObjectsOfUser(this.currentUser.id).subscribe(
        objects => {
          this.userObjects = objects;
          console.log(this.userObjects);
        });
      this.userService.getFavoritesByUserId(this.currentUser.id).subscribe(
        posts => {
          this.favoritesPosts = posts;
          console.log(this.userObjects);
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
