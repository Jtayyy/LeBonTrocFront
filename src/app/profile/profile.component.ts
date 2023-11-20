import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import {User} from "../app.component";
import {Post} from "../post/post.component";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  file: string = '';
  currentUser: User;

  constructor(private auth: AuthService) {
    this.currentUser = this.auth.userValue;
  }

  post_sweat = new Post("sweat", "sweat M neuf", "Aurélien","12/09/2023", "Pull de qualité supérieure mashallah", "43 rue Camille Desmoulin, Cachan" )
  post_armoire = new Post("armoire", "armoire 1m90 bon état", "Paulin", "15/09/2023", "Armoire de qualité supérieure mashallah", "43 rue Camille Desmoulin, Cachan")
  post_ordinateur = new Post("ordinateur", "ordinateur HP i7", "Marion", "18/10/2023", "Mon pc est lent aujourd'hui je le donne gratos", "43 rue Camille Desmoulin, Cachan")


  posts: Post[] = [
    this.post_sweat,
    this.post_armoire,
    this.post_ordinateur,
  ];

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
}
