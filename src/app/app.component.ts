import { Router } from '@angular/router';
import { Component } from '@angular/core';
import {
  ActionPerformed,
  PushNotifications,
  Token
} from '@capacitor/push-notifications';
import { MenuController, Platform } from '@ionic/angular';
import { NotificationService } from './services/notification.service';

import { Geolocation } from '@capacitor/geolocation';
import { GeolocationService } from './services/geolocation.service';
import { UserService } from './services/user.service';
import { HttpService } from './services/http.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  coords: any;
  center:any;
  constructor(public _user:UserService,public _http:HttpService,public platform:Platform,public _notification:NotificationService,public menu:MenuController,public _geo:GeolocationService,private _route:Router) {}
  ngOnInit() {
    console.log('Initializing HomePage');
    if(this._user.validaStorage()){

    }
      this.inicializar()    
      this.locate()
      
  }
  inicializar(){    
    if(this.platform.is('capacitor')){
      PushNotifications.requestPermissions().then(result =>{
        console.log("requestPermissions()");
        if(result.receive){
          PushNotifications.register();
          this.addListeners();
        }else{
          console.log("sinpermiso")
        }
      })
    }else{
      console.log("no es movil")
    }
  }
  closeMenu(){
    this.menu.close()
  }
  logout(){
    this._user.user = {
      rut : null,
      nombre:null,
      apellido:null
    }
    localStorage.removeItem('user');
    this.closeMenu()
  }
  addListeners(){
    PushNotifications.addListener('registration',
    (token:Token) =>{
      console.log( token.value)
      this._notification.token = token.value;
      let input = {token: token.value,usuario:this._user.rut}
      this._http.ingresoToken(input).subscribe((res)=>{
        console.log(res)
      })
      //console.log('Push registration success, token: ' + token.value)
    })

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        //alert(JSON.stringify(notification));
        //alert(notification.notification.data.vista)
        if(notification.notification.data.vista){
          if(notification.notification.data.id){
            this._route.navigateByUrl('/'+notification.notification.data.vista+"/"+notification.notification.data.id);
          }else{
            this._route.navigateByUrl('/'+notification.notification.data.vista);
          }
          
        }
        /*{"actionId":"tap",
            "notification":{
              "id":"0:1636941734614872%729f83c3729f83c3",
              "data":{
                "google.delivered_priority":"normal",
                "google.sent_time":"1636941734597",
                "google.ttl":"2419200",
                "google.original_priority":"normal",
                "id":"10001",
                "from":"172098245835",
                "vista":"alerta",
                  "message":"{
                    \"sound\":\"mysound\",
                    \"icon\":\"myicon\",
                    \"title\":\"LOGRADOOOOOO !!!!\",
                    \"body\":\"CSM 
                    \"}",
                "gcm.n.analytics_data":"Bundle[mParcelledData.dataSize=100]",
                "collapse_key":"com.cadempresa.app"
              }
            }
          }
        */
        console.log('Push action performed: ' + JSON.stringify(notification));
      },
    );
  }

  async locate() {
    await Geolocation.watchPosition({ enableHighAccuracy : true, timeout: 10000 }, async (res) =>{
      //console.log(res);
      this.coords = res.coords;
      this.center = {
        lat: this.coords.latitude,
        lng: this.coords.longitude,
      }
      if(this._geo.lat != this.coords.latitude || this._geo.lon != this.coords.longitude ){
        let input = {usuario:this._user.user.rut}
        this._geo.setCordenates(this.center,input).subscribe((res) => {    
          this._geo.points = res.cerca; 
          console.log(res)
        });
      }     
    });
  }
}
