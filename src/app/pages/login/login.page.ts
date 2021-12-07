import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { HttpService } from 'src/app/services/http.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public rut="";
  public pass="";
  public user = {
    rut:"",
    nombre:"",
    apellido:""
  };
  constructor(public _notification:NotificationService,public _geo:GeolocationService,public router: Router,private _http:HttpService,public _user:UserService) { }

  ngOnInit() {
    if(this._user.validaStorage()){
      this.router.navigateByUrl('/bienvenida');    
    }    
  }
/*
  login(){
    console.log(this.rut)
    let input = {rut:this.rut,pass:this.pass};
    this._http.login(input).subscribe((res)=>{
      console.log(res)
      if(res.resultado == "OK"){
        console.log(res.usuario)
        this._user.rut = res.usuario.rut;
        this._user.nombre = res.usuario.nombre;
        this._user.apellido = res.usuario.apellido;
        this.user = res.usuario;     
        console.log(this.user)
        this._user.user = this.user;
        localStorage.setItem('user',JSON.stringify(this.user));


        let input = {token: this._notification.token,usuario:this._user.rut}
        let center = {
          lat: this._geo.lat,
          lng: this._geo.lon ,
        }
        this._geo.setCordenates(center,input).subscribe((res) => {    
          this._geo.points = res.cerca; 
          console.log(res)
        });
        
        this._http.ingresoToken(input).subscribe((res)=>{
          console.log(res)
          if(res.resultado == "OK"){      
            if(this._user.validaStorage()){
              this.router.navigate(["/bienvenida"]);
            }
          }else{
            console.log(res)
          }
         
        })
        
      }else{
        console.log(res.resultado)
      }
    })
   
  }*/
  login(){ //API DANIEL
    //console.log(this.rut)
    let input = {rut:this.rut,clave:this.pass};
    this._http.login(input).subscribe((res)=>{
      console.log(res)
      if(res.resultado.persona.id_persona != null){
        //console.log(res.usuario)
        this._user.rut = res.resultado.persona.rut_persona;
        this._user.nombre = res.resultado.persona.nombre_persona;
        this._user.apellido = res.resultado.persona.apellido_persona;
        this.user = res.resultado.persona;   
        this._user.empresas = res.resultado.empresas;   
        //console.log(this.user)
        this._user.user = this.user;
        console.log(this._user.user)
        localStorage.setItem('user',JSON.stringify(this.user));
        localStorage.setItem('empresas',JSON.stringify(this._user.empresas));

        let input = {token: this._notification.token,usuario:this._user.user.id_persona}
        let center = {
          lat: this._geo.lat,
          lng: this._geo.lon 
        }
        this._geo.setCordenates(center,input).subscribe((res) => {    
          this._geo.points = res.cerca; 
          //console.log(res)
        });
        
        this._http.ingresoToken(input).subscribe((res)=>{
          console.log(res)
          //if(res.resultado == "OK"){      
          //if(res.message == "Operation done successfully"){
            if(this._user.validaStorage()){
              this.router.navigate(["/bienvenida"]);
            }
         /* }else{
            console.log(res)
          }*/
         
        })
        
      }else{
        console.log(res.resultado)
      }
    })
   
  }

  setRut(valor){
    this.rut = valor;
  }
  setPass(valor){
    this.pass = valor;
  }
}
