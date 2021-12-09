import { Router } from '@angular/router';
import { Component } from '@angular/core';
import {
  ActionPerformed,
  PushNotifications,
  PushNotificationSchema,
  Token
} from '@capacitor/push-notifications';
import { AlertController, MenuController, Platform } from '@ionic/angular';
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
  constructor(public alertController:AlertController,public _user:UserService,public _http:HttpService,public platform:Platform,public _notification:NotificationService,public menu:MenuController,public _geo:GeolocationService,private _route:Router) {}
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
    localStorage.removeItem('empresas');
    localStorage.removeItem('empresa');
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
    PushNotifications.addListener('pushNotificationReceived',
      async (notification: PushNotificationSchema) => {
        console.log("NOTIFICACION")
        console.log(JSON.stringify(notification))
        console.log('Push received: ' + JSON.stringify(notification));
        const alert = await this.alertController.create({
          cssClass: 'confirmaAlerta',
          header: notification.title,
          message: notification.body,
          buttons: [
            {
              text: 'Omitir',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                console.log('Confirm Cancel: blah');
              }
            }, {
              text: 'Revisar', 
              handler: async () => {
                this._route.navigateByUrl('/'+notification.data.vista+"/"+notification.data.id);                
              }
            }
          ]
        });
    
        await alert.present();
      }
    );
    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        if(notification.notification.data.vista){
          if(notification.notification.data.id){
            this._route.navigateByUrl('/'+notification.notification.data.vista+"/"+notification.notification.data.id);
          }else{
            this._route.navigateByUrl('/'+notification.notification.data.vista);
          }          
        }
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
        let input = {usuario:this._user.user.id_persona}
        this._geo.setCordenates(this.center,input).subscribe((res) => {    
          this._geo.points = res.cerca; 
          console.log(res)
        });
      }     
    });
  }
}
