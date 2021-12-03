import { ListarEquiposPage } from './../listar-equipos/listar-equipos.page';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Routes, Router, ActivatedRoute } from '@angular/router';
import { ActionSheetController, AlertController, ModalController, ToastController } from '@ionic/angular';
import { DetalleEquipoPage } from '../detalle-equipo/detalle-equipo.page';
import { GoogleMap } from '@angular/google-maps';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { Socket } from 'ngx-socket-io';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detalle-alerta',
  templateUrl: './detalle-alerta.page.html',
  styleUrls: ['./detalle-alerta.page.scss'],
})
export class DetalleAlertaPage implements OnInit {
  public alertaID;
  public latAlerta;
  public lngAlerta;
  @ViewChild(GoogleMap) map!: GoogleMap;
  mapOptions: google.maps.MapOptions = {
    center: { lat: this._geo.lat, lng: this._geo.lon  },
    zoom : 14,
    minZoom:12,
    maxZoom:16
  }
  markerOptions =[];
  markers = [];
  historial = [];
  myLocation ={name:'', position: { lat: this._geo.lat, lng: this._geo.lon }};
  myOpt = {label:'',icon:'https://maps.google.com/mapfiles/arrow.png'};
  
  
  //equipoa ={name:'', position: { lat: this._geo.lat-0.00034, lng: this._geo.lon+0.0054 }};
 // equipoaOp = {label:'',icon:'https://www.google.com/mapfiles/markerA.png'};
  //equipob ={name:'', position: { lat: this._geo.lat+0.00024, lng: this._geo.lon-0.0044 }};
  //equipobOp = {label:'',icon:'https://www.google.com/mapfiles/markerB.png'};
  estadoAlerta = 1;

  constructor(private socket: Socket,
    public _user:UserService,
    public _http:HttpService,
    public _geo:GeolocationService,
    private router:ActivatedRoute,
    public actionSheetController: ActionSheetController,
    private route:Router,
    public modal:ModalController,
    public alertController:AlertController, 
    public toastController: ToastController) { }

  ngOnInit() {
    this.alertaID = this.router.snapshot.paramMap.get('alerta');
    let input = {
      alerta:this.alertaID
    }
    this._http.getDetalleAlerta(input).subscribe(async (res)=>{
      console.log(JSON.stringify(res))
      console.log(res)
      this.estadoAlerta = res.estado;
      console.log(this.estadoAlerta)
      this.lngAlerta = parseFloat(res.lng);
      this.latAlerta = parseFloat(res.lat);

      await this.generarPuntos(res.equipos);     
      await this.recalcular();
      //this.historial = res.historial;
      /*this.historial = []
      for(let c=0;c<res.historialCount;c++){
        this.historial.push(res.historial[c]);
      }*/
      //console.log(this.historial)
    })

    /*
    this.socket.connect();   
    this.socket.fromEvent('alerta:listarHistorial').subscribe((datos:any) => {
      console.log(datos);
      this.historial = []
      for(let c=0;c<datos.length;c++){
        this.historial.push(datos[c]);
      }

      console.log("DATOS FINALES")
      console.log(this.historial)
    });
    
    this.socket.emit('alerta:listarHistorial', {alerta:this.alertaID});    
*/
    setInterval(()=>{
      if(this.alertaID!=null&&this.alertaID!=""){
        this._http.getHistorial(input).subscribe((res)=>{
          this.historial = []
          for(let c=0;c<res.historial.length;c++){
              this.historial.push(res.historial[c]);
          }
        })
      }
      
    },3000);
  }

  close(){
    this.route.navigate(['/tabs']);
  }
  async deas(id){
      const modal = await this.modal.create({
        component:ListarEquiposPage,
        animated: true,
        mode: 'ios',
        backdropDismiss:true,
        swipeToClose: true,
        componentProps: {
          'alerta': this.alertaID,
        },  
        cssClass: 'listarEquipos-modal'
      })
      return await modal.present();
    }
    async reanimacion() {
      const alert = await this.alertController.create({
        cssClass: 'confirmaReanimacion',
        header: 'Confirmar!',
        message: 'Confirma si vas a ir a reanimar!!!',
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

              /*let data ={
                alerta:this.alertaID,
                usuario:this._user.user.rut,
                seleccion:'reanimar',
                equipo:null
              }
              console.log(data)*/
              //this.socket.emit('alerta:ingresoHistorial', data);
              let input = {
                alerta:this.alertaID,
                usuario:this._user.user.rut,
                seleccion:'reanimar',
                equipo:null
              }
              this._http.ingresoHistorial(input).subscribe(async (res)=>{
                console.log(res)
                const toast = await this.toastController.create({
                  header: 'Gracias!!',
                  message: 'Se ha notificado a todos',
                  position: 'top',
                  duration: 2000
                });
                await toast.present();
              })
              
            }
          }
        ]
      });
  
      await alert.present();
    }

    async cancelar(id){
        const actionSheet = await this.actionSheetController.create({
          header: 'Por qué cancelas la emergencia?',
          cssClass: 'my-custom-class',
          buttons: [ {
            text: 'era una broma',
            icon: 'alert-outline',
            handler: async () => {
              let input = {alerta:this.alertaID,tipo:9,usuario:this._user.user.rut}
              this._http.cancelarAlerta(input).subscribe(async (res)=>{
                console.log(JSON.stringify(res))
                console.log(res)
                if(res.resultado=="OK"){
                  const toast = await this.toastController.create({
                    header:'Emergencia Cancelad',
                    message: 'se ha cancelado la emergencia',
                    position: 'bottom',
                    duration: 3000,
                    animated:true,
                    translucent:true
                  });
                  await toast.present();
                }               
              })
              
            }
          }, {
            text: 'NO era una emergencia vital',
            icon: 'notifications-off-outline',
            handler:  async  () => {
              let input = {alerta:this.alertaID,tipo:8,usuario:this._user.user.rut}
              this._http.cancelarAlerta(input).subscribe(async (res)=>{
                console.log(JSON.stringify(res))
                console.log(res)
                if(res.resultado=="OK"){
                  const toast = await this.toastController.create({
                    header:'Emergencia Cancelad',
                    message: 'se ha cancelado la emergencia',
                    position: 'bottom',
                    duration: 3000,
                    animated:true,
                    translucent:true
                  });
                  await toast.present();
                }               
              })
              
            }
          }, {
            text: 'Fué llevado a un centro',
            icon: 'fitness-outline',
            handler: async  () => {
              let input = {alerta:this.alertaID,tipo:88,usuario:this._user.user.rut}
              this._http.cancelarAlerta(input).subscribe(async (res)=>{
                console.log(JSON.stringify(res))
                console.log(res)
                if(res.resultado=="OK"){
                  const toast = await this.toastController.create({
                    header:'Emergencia Cancelad',
                    message: 'se ha cancelado la emergencia',
                    position: 'bottom',
                    duration: 3000,
                    animated:true,
                    translucent:true
                  });
                  await toast.present();
                }               
              })
              
            }
          }, {
            text: 'Otro Motivo',
            icon: 'create-outline',
            handler: async () => {
              let input = {alerta:this.alertaID,tipo:99,usuario:this._user.user.rut}
              this._http.cancelarAlerta(input).subscribe(async (res)=>{
                console.log(JSON.stringify(res))
                console.log(res)
                if(res.resultado=="OK"){
                  const toast = await this.toastController.create({
                    header:'Emergencia Cancelad',
                    message: 'se ha cancelado la emergencia',
                    position: 'bottom',
                    duration: 3000,
                    animated:true,
                    translucent:true
                  });
                  await toast.present();
                }               
              })
              
            }
          }, {
            text: 'NO Cancelar Emergencia',
            icon: 'close',
            role: 'cancel',
            handler: () => {
            }
          }]
        });
        await actionSheet.present();
    
        const { role } = await actionSheet.onDidDismiss();
        console.log('onDidDismiss resolved with role', role);
      
    }

    recalcular(){
      var bounds = this.getBounds(this.markers);
      this.map.googleMap.fitBounds(bounds);
    }
    getBounds(markers){
      let north;
      let south;
      let east;
      let west;
    
      for (const marker of markers){
        // set the coordinates to marker's lat and lng on the first run.
        // if the coordinates exist, get max or min depends on the coordinates.
        north = north !== undefined ? Math.max(north, marker.position.lat) : marker.position.lat;
        south = south !== undefined ? Math.min(south, marker.position.lat) : marker.position.lat;
        east = east !== undefined ? Math.max(east, marker.position.lng) : marker.position.lng;
        west = west !== undefined ? Math.min(west, marker.position.lng) : marker.position.lng;
      };
      
      const bounds = { north, south, east, west };
      return bounds;
    }
  
    async generarPuntos(puntosRes){

        let emergencia ={name:'', position: { lat: this.latAlerta, lng: this.lngAlerta }};
        let emergenciaOp = {label:'',icon:'https://www.google.com/mapfiles/dd-start.png'};
        //creamos marker mi ubicación        
        this.markers.push(this.myLocation);
        this.markerOptions.push(this.myOpt);
        //creamos marker de emergencia
        this.markers.push(emergencia);
        this.markerOptions.push(emergenciaOp);


        var puntos = puntosRes ;
        /*this.markers.push(this.equipoa);
        this.markerOptions.push(this.equipoaOp);
        this.markers.push(this.equipob);
        this.markerOptions.push(this.equipobOp);*/
        for(let p=0;p<puntos.length;p++){
          let icono = 'https://www.google.com/mapfiles/marker'+puntos[p].letra+'.png';
          let punto = {
            name:'',
            position: { lat: parseFloat(puntos[p].lat), lng: parseFloat(puntos[p].lng)}
          }
          let puntoOp = {label:'',icon:icono}
          this.markers.push(punto);
          this.markerOptions.push(puntoOp);
          
        }
        console.log(this.markers)
        const bounds = await this.getBounds(this.markers);
        await this.map.googleMap.fitBounds(bounds);
    }

    async cargarHistorial(){
      console.log("cargando")
      let input = {alerta:this.alertaID}
      /*this._http.getHistorial({}).subscribe((res)=>{
        console.log(res)
      })*/
    }
}
