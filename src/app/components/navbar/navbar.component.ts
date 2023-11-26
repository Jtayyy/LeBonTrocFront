import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {AsyncPipe, NgFor} from "@angular/common";
import {UserService} from "../../service/user.service";
import {PostService} from "../../service/post.service";
import {NavbarService} from "../../service/navbar.service";
import {Router} from "@angular/router";


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = ['Tout', 'Livre', 'Sport et Loisirs', 'Accessoires', 'Électronique', 'Jeux vidéo', 'Instruments de musique', 'Accessoires de mode', 'Mobilier', 'Informatique', 'Appareils électroménagers', 'Cuisine', 'Transport'];
  filteredOptions: Observable<string[]> = new Observable<string[]>();

  constructor(private router: Router,private userService: UserService, private navbarService: NavbarService) {
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  typeClicked(type:String):void{
    console.log("type", type);
    this.navbarService.updateVariable(type);
    this.router.navigate(['']);
  }

  logoutClick(){
    this.userService.logout();
  }
}
