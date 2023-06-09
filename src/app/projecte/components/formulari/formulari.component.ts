import { Component } from '@angular/core';
import { ApiService } from '../../serveis/api.service';
import { Cordenada } from '../../model/entitats/cordenada';

@Component({
  selector: 'app-formulari',
  templateUrl: './formulari.component.html',
  styleUrls: ['./formulari.component.css']
})
export class FormulariComponent {

  constructor(private apiService: ApiService) { }

  longitudMin: number = 0;
  longitudMax: number = 0;
  latitudMin: number = 0;
  latitudMax: number = 0;
  latitud: number = 0;
  longitud: number = 0;
  mar: number = 0;
  puntsInteres: any[] = [];
  coordenadasSeleccionadas: Cordenada = { lat: 0, lon: 0 };
  brandLogoUri: string = '';
  dretsAutor: string = '';
  imatge: string = '';
  tipoVista: string = 'Aerial';

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
        this.mostraCopy(data);
        this.obtenirImatge();
      });
  }

  mostraCopy(data: any) {
    if (data.brandLogoUri && data.copyright) {
      const brandLogoUri = data.brandLogoUri;
      const derechosAutor = data.copyright;

      this.brandLogoUri = brandLogoUri;
      this.dretsAutor = derechosAutor;
    }
  }

  obtenirImatge() {
    this.apiService.getImatge(this.latitud, this.longitud, this.tipoVista)
      .subscribe(
        (response: Blob) => {
          // Verificar que la respuesta sea un Blob
          if (response instanceof Blob) {
            const blob = response;
            const imageUrl = URL.createObjectURL(blob);
            // Utilizar la URL de la imagen en tu aplicación
            this.imatge = imageUrl;
          } else {
            console.error('La respuesta no es un Blob.');
          }
        },
        (error: any) => {
          console.error('Error al obtener la imagen:', error);
        }
      );
  }
  

}
