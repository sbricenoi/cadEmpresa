import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-detalle-reserva',
  templateUrl: './detalle-reserva.page.html',
  styleUrls: ['./detalle-reserva.page.scss'],
})
export class DetalleReservaPage implements OnInit {

  public rut:string="";
  public sucursal;
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
      rut:'17.768.997-1',
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

  constructor(
    public modal:ModalController,
    navParams: NavParams,
    public toastController: ToastController,
    public _http:HttpService) {
    this.rut = navParams.get('rut');
    this.sucursal = navParams.get('sucursal');
    this.getReserva()
    if(this.rut=='17.768.997-1'){
      this.reserva.reservado = this.usuario[0]
    }
    if(this.rut=='16941170-0'){
      this.reserva.reservado = this.usuario[1]
    }
   }

  ngOnInit() {}
  async cerrar(){
      this.modal.dismiss();
  }
  async getReserva(){
    let input = {
      id_persona: this.rut,
      sucursal_agenda: this.sucursal
    }
    this._http.getAgenda(input).subscribe(async (res)=>{
      console.log(res)
      if(res.resultado=="OK"){
        this.reserva = {
          rut:res.datos.rut_persona,
          nombre:res.datos.nombre_persona,
          apellido:res.datos.apellido_persona,
          correo:res.datos.correo_persona,
          telefono:res.datos.telefono_persona,
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmr_FKgCoFkoxhbzHlwhmLBpIKvkAepBMEjQ&usqp=CAU',
          reservado: true
        }
      }else{
        
        this.reserva = {
          rut:'17.768.997-1',
          nombre:'Sebastian',
          apellido:'Briceño',
          correo:'sebastianbriceno.1991@gmail.com',
          telefono:'+56964506888',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmr_FKgCoFkoxhbzHlwhmLBpIKvkAepBMEjQ&usqp=CAU',
          reservado: false
        }
      }
    },(error)=>{
      alert("error:")
    })
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
