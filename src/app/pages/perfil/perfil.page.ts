import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  @ViewChild(GoogleMap) map!: GoogleMap;
  mapOptions: google.maps.MapOptions = {
    center: { lat: this._geo.lat, lng: this._geo.lon },
    zoom : 14,
    minZoom:12,
    maxZoom:16
  }
  myLocation ={name:'', position: { lat: this._geo.lat, lng: this._geo.lon }};
  myOpt = {label:'',icon:'https://maps.google.com/mapfiles/arrow.png'};
  markerOptions =[];
  markers = [];

  constructor(public _geo:GeolocationService,public _user:UserService) { }

  ngAfterViewInit(){
    //console.log(this.markers)
    let center = {
      lat: this._geo.lat,
      lng:  this._geo.lon ,
    }
    this._geo.setCordenates(center,{}).subscribe(async (res) => {   
      console.log(res.cerca) 
      await this.generarPuntos(res.cerca);
      
    });
    
  }
  ngOnInit() {
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
