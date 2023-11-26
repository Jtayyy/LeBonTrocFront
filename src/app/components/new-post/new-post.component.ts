import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatDialogRef} from "@angular/material/dialog";
import {PostService} from "../../service/post.service";
import {ItemService} from "../../service/item.service";
import {UserService} from "../../service/user.service";
import {User} from "../../model/user";
import {Post} from "../../model/post";
import {Item} from "../../model/item";

@Component({
  selector: 'new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {

  CreatePostForm: FormGroup;
  submitted = false;
  userItems: Item[] = [];
  currentUser: User|null;

  constructor(private postService: PostService, private userService: UserService, private itemService: ItemService, private router: Router, private formBuilder: FormBuilder, private dialogRef: MatDialogRef<NewPostComponent>) {
      this.currentUser = this.userService.userValue;
      if (this.currentUser){
          this.userService.getItemsOfUser(this.currentUser.id).subscribe(
              items => {
                  this.userItems = items;
                  this.showAddItemMessage = this.userItems.length === 0;
              });
      }
      this.CreatePostForm = this.formBuilder.group({
          item_id: ['', [Validators.required]],
          title: ['', Validators.required],
          description: ['', Validators.required],
          address: [this.currentUser?.address || '', Validators.required]
      });
  }

  get f() { return this.CreatePostForm.controls; }
    createPost() {
        this.submitted = true;

        if (this.CreatePostForm.invalid) {
            return;
        }

        this.itemService.findById(this.f["item_id"].value).subscribe(
            (item) => {
                const postData: Post = {
                    id:0,
                    item: item,
                    title: this.f["title"].value,
                    publication: new Date().toISOString(),
                    description: this.f["description"].value,
                    address: this.f["address"].value
                };

                this.postService.addPost(postData).subscribe(
                    (response) => {
                        this.dialogRef.close(true);
                        this.router.navigate(['/']);
                    },
                    (error) => {
                        console.error('Erreur lors de l\'inscription', error);
                    }
                );
            },
            (error) => {
                console.error('Erreur lors de la récupération de l\'objet', error);
            }
        );
    }
    showAddItemMessage: boolean = false;
}

