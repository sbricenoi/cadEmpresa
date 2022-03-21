import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {
  empresas  = []
  constructor(public _notification:NotificationService,public router: Router,public menu:MenuController,public _user:UserService) { }

  ngOnInit() {
    localStorage.removeItem('empresa');
    this._user.empresa = null;
    if(localStorage.getItem('empresas')){
      this.empresas = JSON.parse(localStorage.getItem('empresas')|| '{}');
      //this.user.token = localStorage.getItem('token');
      console.log(this.empresas)
      //this.cargarEmpresas()
    }else{
      console.log("sin empresas")
    }
  }
  async redirec(ruta){
    this._user.empresa = ruta;
    localStorage.setItem('empresa',JSON.stringify(this._user.empresa));
    this.router.navigate(['/tabs']);
  }
  openMenu() {
    this.menu.enable(true, 'first');    
    this.menu.open('first');
  }
  /*cargarEmpresas(){

  }*/
}
