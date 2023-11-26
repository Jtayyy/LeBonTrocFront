import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private sharedTypeSearch = new Subject<any>();
  sharedTypeSearch$ = this.sharedTypeSearch.asObservable();

  constructor() {
    // Initialiser avec une valeur par défaut si nécessaire
    this.updateVariable('Tout');
  }

  updateVariable(newValue: any) {
    this.sharedTypeSearch.next(newValue);
  }

}
