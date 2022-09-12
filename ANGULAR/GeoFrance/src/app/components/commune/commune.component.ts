import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Departement } from 'src/app/models/departement.model';
import { Commune } from 'src/app/models/commune.model';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-commune',
  templateUrl: './commune.component.html',
  styleUrls: ['./commune.component.css']
})
export class CommuneComponent implements OnInit {

  departements: Departement[] = []; // J'initialise un tableau pour stocker les données de l'API
  // Déclaration du boolean pour le chargement
  departementsIsLoading: boolean = false; // Définir le chargement des informations
  departementsIsLoaded: boolean = false; // Si les départements sont chargés

  communes: Commune[] = [];
  communesForGraph: { name: string, value: number}[] = []; // Permets d'ajouter les graphs
  communesIsLoading: boolean = true;
  communesIsLoaded: boolean = true;


// Pour réaliser un GET/récupérer une information, je dois déclarer en PRIVATE le service HttpClient
  constructor(private HttpClient: HttpClient, private toastr: ToastrService) { }

  //Fonction qui va nous permettre de charger les départements de l'API
  loadDepartements(): void{ // type void car plusieurs instructions à la suite | permet de mieux gérer l'asynchrone
    this.departementsIsLoading = true; // Permet de gérer le spinner de chargement
    this.toastr.success('Liste des départements chargés', 'Chargement terminé')
    // Récupération des données de l'API grâce à une requette GET
    this.HttpClient.get<Departement[]>("https://geo.api.gouv.fr/departements").subscribe( // On doit subscribe aux infos de l'API
      data => {
        this.departements = data; // Je transferts les données de l'API vers mon tableau vide
        this.departementsIsLoaded = true; // Le bouton de chargement disparait
        this.departementsIsLoading = false; // Une fois les données chargées, les chargement passe à false
      }
    )
  }

  loadCommunes(codeDepartement: string): void{
    this.communesIsLoading = true;
    this.toastr.success('Liste des communes chargés', 'Chargement terminé')
    this.HttpClient.get<Commune[]>(`https://geo.api.gouv.fr/departements/${codeDepartement}/communes`).subscribe(
      data => {
        this.communes = data;
        this.communesForGraph = data
        .filter(commune => commune.population > 3_000)
        .map(commune => {
          return {
            name: commune.nom,
            value: commune.population
          }
        })
        this.communesIsLoaded = true;
        this.communesIsLoading = false;
      }
    )
  }

  ngOnInit(): void {
  }

}
