import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatDialogRef} from "@angular/material/dialog";
import {PostService} from "../../service/post.service";
import {ObjectService} from "../../service/object.service";
import {UserService} from "../../service/user.service";
import {User} from "../../model/user";
import {favPost} from "../../model/favPost";
import {Object} from "../../model/object";

@Component({
  selector: 'new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {

  CreatePostForm: FormGroup;
  submitted = false;
  userObjects: Object[] = [];
  currentUser: User|null;

  constructor(private postService: PostService, private userService: UserService, private objectService: ObjectService, private router: Router, private formBuilder: FormBuilder, private dialogRef: MatDialogRef<NewPostComponent>) {
      this.currentUser = this.userService.userValue;
      if (this.currentUser){
          this.userService.getObjectsOfUser(this.currentUser.id).subscribe(
              objects => {
                  this.userObjects = objects;
                  this.showAddObjectMessage = this.userObjects.length === 0;
              });
      }
      this.CreatePostForm = this.formBuilder.group({
          object_id: ['', [Validators.required]],
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

        this.objectService.findById(this.f["object_id"].value).subscribe(
            (object) => {
                const postData: favPost = {
                    id:0,
                    object: object,
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
    showAddObjectMessage: boolean = false;
}

