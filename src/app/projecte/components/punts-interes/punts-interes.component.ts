import { Component } from '@angular/core';
import { ApiService } from '../../serveis/api.service';
import { Cordenada } from '../../model/entitats/cordenada';

@Component({
  selector: 'app-punts-interes',
  templateUrl: './punts-interes.component.html',
  styleUrls: ['./punts-interes.component.css']
})
export class PuntsInteresComponent {
  
    constructor(private apiService: ApiService) { }

    longitudMin : number = 0;
    longitudMax : number = 0;
    latitudMin : number = 0;
    latitudMax : number = 0;
    kinds: string = '';
    rate: string = '';
    coordenadasSeleccionadas: Cordenada = { lat: 0, lon: 0 };
    puntsInteres: any[] = [];
    nombreSeleccionado: string = '';
    categoriasSeleccionadas: string = '';
    valoracionSeleccionada: string = '';
    brandLogoUri: string = '';
    dretsAutor: string = '';

    obtenirPunts() {
      this.apiService.getPuntsInteres(this.longitudMin, this.longitudMax, this.latitudMin, this.latitudMax, this.kinds, this.rate)
        .subscribe((data: any) => {
          this.puntsInteres = data;
          });
    }

    obtenirDadesSeleccionat() {
      const puntSeleccionat = this.puntsInteres.find(punt => punt.xid === this.coordenadasSeleccionadas);
      if (puntSeleccionat) {
        this.coordenadasSeleccionadas = {
          lat: puntSeleccionat.point.lat,
          lon: puntSeleccionat.point.lon
        };
        this.mostrarDetallesPuntoInteres(puntSeleccionat);
      }
    }

    mostrarDetallesPuntoInteres(punt: any) {
      const { lat, lon, name, kinds, rate } = punt;
      this.coordenadasSeleccionadas = { lat, lon };
      this.nombreSeleccionado = name;
      this.categoriasSeleccionadas = kinds;
      this.valoracionSeleccionada = rate;
    }

    mostraCopy(data: any) {
      if (data.brandLogoUri && data.copyright) {
        const brandLogoUri = data.brandLogoUri;
        const derechosAutor = data.copyright;
    
        this.brandLogoUri = brandLogoUri;
        this.dretsAutor = derechosAutor;
      }
    }
    
}
