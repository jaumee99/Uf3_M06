import { Component } from '@angular/core';
import { ApiService } from '../../serveis/api.service';
import { Cordenada } from '../../model/entitats/cordenada';

@Component({
  selector: 'app-formulari',
  templateUrl: './formulari.component.html',
  styleUrls: ['./formulari.component.css']
})
export class FormulariComponent {

  constructor(private apiService: ApiService) {}

  longitudMin : number = 0;
  longitudMax : number = 0;
  latitudMin : number = 0;
  latitudMax : number = 0;
  latitud : number = 0;
  longitud : number = 0;
  mar: number = 0;
  puntsInteres: any[] = [];
  coordenadasSeleccionadas: Cordenada = { lat: 0, lon: 0 };

  obtenirPunts() {
    this.apiService.getPunts(this.longitudMin, this.longitudMax, this.latitudMin, this.latitudMax)
      .subscribe((data: any) => {
        this.puntsInteres = data;
        });
  }
  

  obtenirElevacio() {
    this.apiService.getElevacio(this.coordenadasSeleccionadas.lat, this.coordenadasSeleccionadas.lon)
      .subscribe((data: any) => {
        this.mar = data.resourceSets[0].resources[0].elevations[0];
    });
  }

}
