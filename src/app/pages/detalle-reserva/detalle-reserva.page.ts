import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-reserva',
  templateUrl: './detalle-reserva.page.html',
  styleUrls: ['./detalle-reserva.page.scss'],
})
export class DetalleReservaPage implements OnInit {

  public rut:string="";
  public isChecked;
  public reserva:any={};
  public form=[
    {val:'dolorCabeza',isChecked:false},
    {val:'tieneFiebre',isChecked:false},
    {val:'tosSeca',isChecked:false},
    {val:'dolorGarganta',isChecked:false},
  ]
  public dolorCabeza=false;
  public tieneFiebre=false;
  public tosSeca=false;
  public dolorGarganta=false;
  public temperatura=0
 
  usuario = [
    {
      rut:'17768997-1',
      nombre:'Sebastian',
      apellido:'Briceño',
      correo:'sebastianbriceno.1991@gmail.com',
      telefono:'+56964506888',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmr_FKgCoFkoxhbzHlwhmLBpIKvkAepBMEjQ&usqp=CAU',
      reservado: true
    },
    {
      rut:'16941170-0',
      nombre:'Paula',
      apellido:'Galimidi',
      correo:'paula.galimidi@gmail.com',
      telefono:'+56912345678',
      avatar: 'https://i.pinimg.com/originals/19/87/90/198790eb7e08830027c1ae1686496c72.png',
      reservado: false
    }    
  ]

  constructor(public modal:ModalController,navParams: NavParams,public toastController: ToastController) {
    this.rut = navParams.get('rut');
    if(this.rut=='17768997-1'){
      this.reserva = this.usuario[0]
    }
    if(this.rut=='16941170-0'){
      this.reserva = this.usuario[1]
    }
    //console.log(this.form)
   }

  ngOnInit() {}
  async cerrar(){
      this.modal.dismiss();
  }
  async guardar(){
    //console.log(this.form)
    console.log(this.dolorCabeza)
    console.log(this.tieneFiebre)
    console.log(this.tosSeca)
    console.log(this.dolorGarganta)
    console.log(this.temperatura)
    this.cerrar();
    const toast = await this.toastController.create({
      message: 'Encuesta Guardada',
      position: 'bottom',
      duration: 3000,
      animated:true,
      translucent:true
    });
    await toast.present();
}

cambia(event){
  if(event.currentTarget.id=="dolorCabeza"){
    this.dolorCabeza = event.currentTarget.checked;
  }
  if(event.currentTarget.id=="tieneFiebre"){
    this.tieneFiebre = event.currentTarget.checked;
  }
  if(event.currentTarget.id=="tosSeca"){
    this.tosSeca = event.currentTarget.checked;
  }
  if(event.currentTarget.id=="dolorGarganta"){
    this.dolorGarganta = event.currentTarget.checked;
  }
  if(event.currentTarget.id=="temperatura"){
    this.temperatura = event.currentTarget.value;
  }
  console.log(this.temperatura)
}
}
