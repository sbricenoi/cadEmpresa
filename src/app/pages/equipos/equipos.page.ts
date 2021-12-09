import { Component, OnInit } from '@angular/core';
import { DetalleEquipoPage } from '../detalle-equipo/detalle-equipo.page';
import { MenuController, ModalController } from '@ionic/angular';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.page.html',
  styleUrls: ['./equipos.page.scss'],
})
export class EquiposPage implements OnInit {
  public equipos = [];
  constructor(public modal:ModalController,public menu:MenuController,private _http:HttpService,public _user:UserService,public router: Router) {}
  async detalle(equipo){
    const modal = await this.modal.create({
      component:DetalleEquipoPage,
      animated: true,
      mode: 'ios',
      backdropDismiss:true,
      swipeToClose: true,
      componentProps: {
        'id': equipo,
      },  
      cssClass: 'equipo-modal'
    })
    return await modal.present();
  }

  ngOnInit(){
    if(!this._user.empresa){
      console.log("sin empresa seleccionada")
      this.router.navigate(['/bienvenida']);
    }
    console.log("comienza lista")
    this.listar()
  }
  openMenu() {
    this.menu.enable(true, 'first');    
    this.menu.open('first');
  }
  async listar(){
    let input = {
    }
    this._http.getEquipos(input).subscribe(async (res)=>{
      console.log(res)
      if(res.resultado=="OK"){
        for(let e=0;e<res.equipos.data.length;e++){
          this.equipos.push(res.equipos.data[e]);
        }
      }       
      console.log(this.equipos)
    })
  }
}
