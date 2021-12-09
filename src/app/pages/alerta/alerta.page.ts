import { Component, OnInit } from '@angular/core';

import { MenuController, ToastController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {
  public entidad:string;
  public segundos = 10;
  public confirma = true;
  public inicio = false;

  constructor(public menu:MenuController,
    public router: Router,
    public toastController:ToastController,
    private callNumber: CallNumber,
    public _geo:GeolocationService,
    public _notification:NotificationService,
    public _user:UserService) {}
    ngOnInit(){
      if(!this._user.empresa){
        console.log("sin empresa seleccionada")
        this.router.navigate(['/bienvenida']);
      }
      console.log(this._user.rut)
    }
  openMenu() {
    this.menu.enable(true, 'first');    
    this.menu.open('first');
  }
  alerta(){
    this.segundos = 10;
    this.conteo();
  }

  async conteo(){    
    this.confirma = true;
    this.inicio = true;
    await this.delay(1)
    this.segundos--
    await this.delay(1)
    this.segundos--
    await this.delay(1)
    this.segundos--
    await this.delay(1)
    this.segundos--
    await this.delay(1)
    this.segundos--
    await this.delay(1)
    this.segundos--
    await this.delay(1)
    this.segundos--
    await this.delay(1)
    this.segundos--
    await this.delay(1)
    this.segundos--
    await this.delay(1)
    this.segundos--
    this.inicio = false;
    if(this.confirma){
      this.enviar()
    }
    else{
      console.log("se cancelo")
    }
  }
  async delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
  }  
  async enviar(){   
    let input = {usuario:this._user.user.id_persona}
    this._geo.generaAlerta(input).subscribe(async (res) => {  
      console.log(res) 
      if(res.alerta>0){
        this.router.navigate(['/detalle-alerta/'+res.alerta]);
        const toast = await this.toastController.create({
          header:'Emergencia Alertada',
          message: 'Ha sido Enviada la alerta',
          position: 'bottom',
          duration: 3000,
          animated:true,
          translucent:true
        });
        await toast.present();
      }else{
        const toast = await this.toastController.create({
          header:'Emergencia NO Alertada',
          message: 'INTENTALO NUEVAMENTE',
          position: 'bottom',
          duration: 3000,
          animated:true,
          translucent:true
        });
        await toast.present();
      }
    });
    this.llamar();
  }
  async cancelar(){
    const toast = await this.toastController.create({
      header:'Emergencia Cancelada',
      message: 'No se ha alertado a ninguna entidad',
      position: 'bottom',
      duration: 3000,
      animated:true,
      translucent:true
    });
    await toast.present();
    this.confirma=false;
    this.inicio = false;
  }

  
  async llamar(){
    var respuesta;
    this.callNumber.callNumber("+56964506888", true)
    .then(res => respuesta=res)
    .catch(err => respuesta=err);
  }

}
