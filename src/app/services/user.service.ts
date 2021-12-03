import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public rut;
  public nombre;
  public apellido;
  public estado;
  public logeado;
  public user:any;
  public empresa;
  
  constructor() { }

  validaStorage(){
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user')|| '{}');
      //this.user.token = localStorage.getItem('token');
      console.log("usuario logeado",this.user)
      console.log(this.user.nombre)
      return true;
    }else{
      console.log("sin logear")
      this.user = {
        rut : null,
        nombre:null,
        apellido:null
      }
      console.log(this.user)
      return false
    }
  }
}
