import { AlertController, ModalController, NavParams, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { UserService } from 'src/app/services/user.service';
import { HttpService } from 'src/app/services/http.service';
import { GeolocationService } from 'src/app/services/geolocation.service';

@Component({
  selector: 'app-listar-equipos',
  templateUrl: './listar-equipos.page.html',
  styleUrls: ['./listar-equipos.page.scss'],
})
export class ListarEquiposPage implements OnInit {
  public alertaID;
  public equipos=[];

  constructor(public _user:UserService,
    private socket: Socket,
    private navParams: NavParams,
    private modal:ModalController,
    private toast:ToastController,
    private _http:HttpService,
    public alertController:AlertController,
    private _geo:GeolocationService) { 

    this.alertaID = navParams.get('alerta');

  }

  ngOnInit() {
    //this.socket.connect();   
    //this.socket.emit('alerta:listarHistorial', {alerta:this.alertaID});  
    let input = {
      alerta:this.alertaID
    }
    this._http.getDetalleAlerta(input).subscribe(async (res)=>{
      console.log(JSON.stringify(res))
      console.log(res)
      res.equipos    
      for(let e=0;e<res.equipos.length;e++){
        this.equipos.push(res.equipos[e]);
      }
      console.log(this.equipos)
    })
  }
  async seleccion(equipo){
    const alert = await this.alertController.create({
      cssClass: 'confirmaDEA',
      header: 'Confirmar!',
      message: 'Confirma si vas a ir a buscar el DEA!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'OK', 
          handler: async () => {            
            let input ={
              alerta:this.alertaID,
              usuario:this._user.user.rut,
              seleccion:'dea',
              equipo:equipo.id
            }
            this._http.ingresoHistorial(input).subscribe(async (res)=>{
              this.modal.dismiss();
              console.log(res)
              console.log('Confirm Okay');
              const toast = await this.toast.create({
                header: 'Gracias!!',
                message: 'Se ha notificado a todos',
                position: 'top',
                duration: 2000
              });
              await toast.present();
              let url = 'https://www.google.com/maps/dir/'+this._geo.lat+','+this._geo.lon+'/'+equipo.lat+','+equipo.lng+'/@'+equipo.lat+','+equipo.lng+',12z';
              window.open(url, "_blank");
            })
          }
        }
      ]
    });
    await alert.present();
    
    /*console.log(data)
    this.socket.emit('alerta:ingresoHistorial', data);
    this.modal.dismiss();
    const toast = await this.toast.create({
      header:'Equipo Seleccionado',
      message: 'se ha notificado correctamente tu elección',
      position: 'bottom',
      duration: 3000,
      animated:true,
      translucent:true
    });
    await toast.present();*/
  }
}
