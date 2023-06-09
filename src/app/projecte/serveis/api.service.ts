import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  bingmapUrl = 'http://dev.virtualearth.net/REST/v1';
  bingmapKey = 'Akh25orXrFu-2LHLP6l__j3eYBiN-k0Dlt04fVi4oyacXSirnl1f2t4Pye_xa_mg';

  opentripmapUrl = 'https://api.opentripmap.com/0.1';
  opentripmapKey = '5ae2e3f221c38a28845f05b6a6cd1ee77e9a94eec40434999d828cfa';

  getPunts(longitudMin: number, longitudMax: number, latitudMin: number, latitudMax: number) {
    return this.http.get(this.opentripmapUrl+'/en/places/bbox?lon_min='+longitudMin+'&lon_max='+longitudMax+'&lat_min='+latitudMin+'&lat_max='+latitudMax+'&format=json&apikey='+this.opentripmapKey);
  }

  getElevacio(latitud: number, longitud: number) {
    return this.http.get(this.bingmapUrl+'/Elevation/List?points='+latitud+','+longitud+'&key='+this.bingmapKey);
  }

}
