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

  constructor(public _notification:NotificationService,public router: Router,public menu:MenuController,public _user:UserService) { }

  ngOnInit() {
  }
  async redirec(ruta){
    this._user.empresa = ruta;
    this.router.navigate(['/tabs']);
  }
  openMenu() {
    this.menu.enable(true, 'first');    
    this.menu.open('first');
  }
}
