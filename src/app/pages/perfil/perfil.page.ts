import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { ToastController } from '@ionic/angular';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { HttpService } from 'src/app/services/http.service';
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
  ActualPass;
  NuevaPass;

  constructor(public _geo:GeolocationService,public _http:HttpService,public _user:UserService, 
    public toastController: ToastController) { }

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
  async guardar(){
    console.log(this._user.user)
    let input = {
      id_persona: this._user.user.id_persona,
      nombre_persona: this._user.user.nombre_persona,
      apellido_persona: this._user.user.apellido_persona,
      comuna_persona: this._user.user.comuna_persona,
      ciudad_persona: this._user.user.ciudad_persona,
      direccion_persona: this._user.user.direccion_persona,
      fecha_de_nacimiento_persona: this._user.user.fecha_de_nacimiento_persona,
      telefono_persona: this._user.user.telefono_persona,
      correo_persona:this._user.user.correo_persona
    }
    this._http.setPerfil(input).subscribe(async (res)=>{
      console.log(JSON.stringify(res))
      console.log(res)
      if(res.error==null){
        const toast = await this.toastController.create({
          header:'Guardado',
          message: 'se han guardado Correctamente tus cambios',
          position: 'bottom',
          duration: 3000,
          animated:true,
          translucent:true
        });
        await toast.present();
      }                    
    })
 }
 async guardarPass(){
  
  let input = {
    id_persona: this._user.user.id_persona,
    new_pass: this.NuevaPass,
    actual_pass: this.ActualPass
  }
  console.log(input)
  this._http.setPass(input).subscribe(async (res)=>{
    console.log(JSON.stringify(res))
    console.log(res)
    if(res.error==null){
      const toast = await this.toastController.create({
        header:'Guardado',
        message: 'se ha actualizado tu contraseña',
        position: 'bottom',
        duration: 3000,
        animated:true,
        translucent:true
      });
      await toast.present();
    }                    
  })
}
}
