import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  public lat;
  public lon;
  public points=[];
  constructor(private httpClient: HttpClient,private _notification:NotificationService) { }

  /*public setCordenates(cord,input){
    this.lat = cord.lat;
    this.lon = cord.lng;

    input.accion = "ingreso_gps";
    input.latitud = this.lat;
    input.longitud =  this.lon;
    input.tokenNotification = this._notification.token;
    let params = JSON.stringify(input);
    let headers = new HttpHeaders().set('Content-type','application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Allow-Credentials', 'true');
    console.log("params:",params)
    return this.httpClient.post<any>("https://cad.onlineweb.cl/prueba_api.php",params,{headers:headers});   
    //console.log(cord)
  }*/
  public setCordenates(cord,input){
    this.lat = cord.lat;
    this.lon = cord.lng;

    input.accion = "ingreso_gps";
    input.latitud = this.lat;
    input.longitud =  this.lon;
    input.tokenNotification = this._notification.token;
    let params = JSON.stringify(input);
    let headers = new HttpHeaders().set('Content-type','application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Allow-Credentials', 'true');
    console.log("params:",params)
    return this.httpClient.post<any>("https://cad.onlineweb.cl/prueba_api_sb.php",params,{headers:headers});   
    //console.log(cord)
  }
  public generaAlerta(input:any){    
    input.accion = "ingresar_alerta";
    input.latitud = this.lat;
    input.longitud =  this.lon;
    input.tokenNotification = this._notification.token;
    let params = JSON.stringify(input);
    let headers = new HttpHeaders().set('Content-type','application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Allow-Credentials', 'true');
    console.log("params:",params)
    return this.httpClient.post<any>("https://cad.onlineweb.cl/prueba_api_sb.php",params,{headers:headers});   
  }
}
