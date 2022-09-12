import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Departement } from 'src/app/models/departement.model';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-departement-table',
  templateUrl: './departement-table.component.html',
  styleUrls: ['./departement-table.component.css']
})
export class DepartementTableComponent implements OnInit {

  faMagnifyingGlass = faMagnifyingGlass
  // Permet de gérer les entrées et sorties dans la balise HTML de commune.component.html
  @Input() departements: Departement[] = [];
  @Input() departementsIsLoading: boolean = false;
  @Input() departementsIsLoaded: boolean = false;
  @Output() loadDepartements: EventEmitter<{}> = new EventEmitter();
  @Output() loadCommunes: EventEmitter<string> = new EventEmitter();

  //On initialise la page actuelle comme page 1
  currentPage: number = 1;

  // Pour filtrer le tableau | fonction filter
  search: string = ""; // l'input de la barre de recherche | on le charge à vide par défaut

  constructor() {  }

  ngOnInit(): void {
  }
  // getLength et getDepartements permettent de scinder le tableau par tranche de 10
    getLength(): number{ // Cette fonction permet d'obtenir la longueur du tableau départements et de convertir en lowerCase les données pour faire fonctionner la barre de recherche
      return this.departements
      .filter(departement => departement.nom.toLowerCase().includes(this.search.toLowerCase())  ||
      departement.code.includes(this.search))
      .length
    }
    // on fait -1 car dans un tableau, la valeur de départ est 0.
    // Slice prend une valeur de départ et une valeur de fin. Ici, on commence à 1 - 1, et *10 pour prendre seulement 10 ligne
    getDepartements(): Departement[]{
      return this.departements
      .filter(departement => departement.nom.toLowerCase().includes(this.search.toLowerCase()) ||
      departement.code.includes(this.search))
      .slice((this.currentPage - 1) * 10, this.currentPage * 10)
  }

  

}
