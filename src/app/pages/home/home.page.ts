import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { UserService } from 'src/app/services/user.service';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
declare var window;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  locations:any;
  public respuesta;
  public alertas=[];
  constructor(public menu:MenuController,
    public _user:UserService,
    private _http:HttpService,
    private router:Router
    ) {}
  openMenu() {
    this.menu.enable(true, 'first');    
    this.menu.open('first');
    this.locations= [];
  }

ngOnInit(){
  if(!this._user.empresa){
    console.log("sin empresa seleccionada")
    this.router.navigate(['/bienvenida']);
  }
  let input = {
    usuario:this._user.user.rut
  }
  this._http.getAlertas(input).subscribe(async (res)=>{
    console.log(JSON.stringify(res))
    console.log(res)    
    for(let e=0;e<res.alertas.length;e++){
      this.alertas.push(res.alertas[e]);
    }
    console.log(this.alertas)
  })
}
}
