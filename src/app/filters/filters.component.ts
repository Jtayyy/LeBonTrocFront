import {Component, ViewChild} from '@angular/core';
import {MatAccordion} from "@angular/material/expansion";


class Home {
  name: string;
  checked: boolean;
  constructor(name:string, checked:boolean) {
    this.name = name;
    this.checked = checked;
  }
}

class Color {
  name: string;
  color: string;
  checked: boolean;
  constructor(name:string, color:string, checked:boolean) {
    this.name = name;
    this.color = color;
    this.checked = checked;
  }
}

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {

  openAccordeon: boolean = false;
  msgAccordeon: string = "Ouvrir les onglets"
  colorAccordeon: string = "#A5D6A7"
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  armoire = new Home('Armoire', false);
  canape = new Home('Canapé', false);
  chaise = new Home('Chaise', false);
  four = new Home('Four', false);
  lit = new Home('Lit', false);
  table = new Home('Table', false);

  rouge = new Color('Rouge', '#ff0000', false)
  vert = new Color('Vert', '#008000', false)
  jaune = new Color('Jaune', '#ffff00', false)
  bleu = new Color('Bleu', '#0000ff', false)

  items: Home[] = [
    this.armoire,
    this.canape,
    this.chaise,
    this.four,
    this.lit,
    this.table
  ];

  colors: Color[] = [
    this.bleu,
    this.vert,
    this.rouge,
    this.jaune,
  ];

  openAll() {
    if (this.openAccordeon) {
      this.accordion.closeAll();
      this.openAccordeon = false;
      this.msgAccordeon = "Ouvrir les onglets"
      this.colorAccordeon = "#A5D6A7"

    } else {
      this.accordion.openAll();
      this.openAccordeon = true;
      this.msgAccordeon = "Fermer les onglets"
      this.colorAccordeon = "palevioletred"
    }
  }

  formatLabel(value: number): string {
    if (value >= 1) {
      return Math.round(value / 1) + 'km';
    }

    return `${value}`;
  }
}
