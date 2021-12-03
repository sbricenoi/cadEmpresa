import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { ModalController, NavParams } from '@ionic/angular';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-detalle-equipo',
  templateUrl: './detalle-equipo.page.html',
  styleUrls: ['./detalle-equipo.page.scss'],
})
export class DetalleEquipoPage implements OnInit {
  @ViewChild(GoogleMap) map!: GoogleMap;
  mapOptions: google.maps.MapOptions;
  myLocation;
  myOpt = {label:'',icon:'https://maps.google.com/mapfiles/arrow.png'};
  markerOptions =[];
  markers = [];

  public equipo:any;
  public idequipo;
  constructor(public modal:ModalController,navParams: NavParams,private _http:HttpService,public _geo:GeolocationService) {
    this.idequipo = navParams.get('id');
    this.listar();
  }

  ngOnInit() {
  }
  close(){
    this.modal.dismiss();
  }
  async listar(){
    let input = {
      equipo:this.idequipo
    }
    this._http.getEquipo(input).subscribe(async (res)=>{
      console.log(res)
      if(res.resultado=="OK"){
          this.equipo = res.equipo;
          this.mapOptions =  {
            center: { lat:  parseFloat(this.equipo.lat), lng: parseFloat(this.equipo.lng) },
            zoom : 14,
            minZoom:12,
            maxZoom:16
          }
          this.myLocation = {name:'', position: { lat: parseFloat(this.equipo.lat), lng: parseFloat(this.equipo.lng) }}
          await this.generarPuntos(res.cerca);
          console.log(this.equipo)
      }
      
    })
  }
  recalcular(){
    var bounds = this.getBounds(this.markers);
    this.map.googleMap.fitBounds(bounds);
  }
  getBounds(markers){
    let north;
    let south;
    let east;
    let west;
  
    for (const marker of markers){
      // set the coordinates to marker's lat and lng on the first run.
      // if the coordinates exist, get max or min depends on the coordinates.
      north = north !== undefined ? Math.max(north, marker.position.lat) : marker.position.lat;
      south = south !== undefined ? Math.min(south, marker.position.lat) : marker.position.lat;
      east = east !== undefined ? Math.max(east, marker.position.lng) : marker.position.lng;
      west = west !== undefined ? Math.min(west, marker.position.lng) : marker.position.lng;
    };
    
    const bounds = { north, south, east, west };
    return bounds;
  }

  async generarPuntos(puntosRes){
     //console.log("llega")
      var puntos = puntosRes ;
      this.markers.push(this.myLocation);
      this.markerOptions.push(this.myOpt);
      //console.log(this.markers)
      const bounds = await this.getBounds(this.markers);
      await this.map.googleMap.fitBounds(bounds);
  }
}
