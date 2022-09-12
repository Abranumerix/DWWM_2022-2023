import { Component, Input, OnInit } from '@angular/core';
import { Commune } from 'src/app/models/commune.model';

@Component({
  selector: 'app-commune-table',
  templateUrl: './commune-table.component.html',
  styleUrls: ['./commune-table.component.css']
})
export class CommuneTableComponent implements OnInit {

  @Input() communes: Commune[] = [];
  @Input() communesIsLoading: boolean = false;
  @Input() communesIsLoaded: boolean = false;

  currentPage: number = 1;
  search: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  getLength(): number{ // Cette fonction permet d'obtenir la longueur du tableau départements et de convertir en lowerCase les données pour faire fonctionner la barre de recherche
    return this.communes
    .filter(commune => commune.nom.toLowerCase()
    .includes(this.search.toLowerCase()) ||
    commune.code
    .includes(this.search))
    .length
  }

  getCommunes(): Commune[]{
    return this.communes
    .filter(commune => commune.nom.toLowerCase()
    .includes(this.search.toLowerCase()) ||
    commune.codesPostaux
    .includes(this.search))
    .slice((this.currentPage - 1) * 10, this.currentPage * 10)
  }

  triCommunes(): Commune[]{
      return this.communes
      .sort((a: Commune, b: Commune) => {
        return a.population - b.population
    })
      .reverse()
  }

  triPop(): Commune[]{
    return this.communes
    .sort((a: Commune, b: Commune) => {
      return a.population - b.population
  })
  }
}
