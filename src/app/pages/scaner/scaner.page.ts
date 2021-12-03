import { DetalleReservaPage } from './../detalle-reserva/detalle-reserva.page';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, MenuController } from '@ionic/angular';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scaner',
  templateUrl: './scaner.page.html',
  styleUrls: ['./scaner.page.scss'],
})
export class ScanerPage implements OnInit {
  result = null;
  scanActive = false;


  constructor( public modal:ModalController, 
    public alert:AlertController,
    public menu:MenuController,
    public _user:UserService,
    private router:Router) {}
  ngOnInit(){
    if(!this._user.empresa){
      console.log("sin empresa seleccionada")
      this.router.navigate(['/bienvenida']);
    }
  }
  openMenu() {
    this.menu.enable(true, 'first');    
    this.menu.open('first');
  }
  ngAfterViewInit() {
    BarcodeScanner.prepare();
  }

  ngOnDestroy() {
    this.stopScanner()
  }

  async reserva(){
    //var rut = this.obtenerData('https://wwwwasdasd.com?RUN=17768997-1&type=CEDULA&serial=1233243453465');
    const modal = await this.modal.create({
      component:DetalleReservaPage,
      animated: true,
      mode: 'ios',
      backdropDismiss:false,
      cssClass: 'reserva-modal',
      componentProps: {
        'rut': this.result,
      },     
    })
    return await modal.present();
  }

  async startScanner(){
    const allowed = await this.checkPermission();
    if(allowed){
      this.scanActive = true;
      const result = await BarcodeScanner.startScan();
      if(result.hasContent){
        this.result = await this.obtenerData(result.content);
        this.scanActive = false;
        this.reserva();
      }
    }    
  }

  async stopScanner(){    
    BarcodeScanner.stopScan();
    this.scanActive = false;
  }

  async checkPermission(){
    return new Promise(async (resolve, reject)=>{
      const status = await BarcodeScanner.checkPermission({force:true});
      if(status.granted){
        resolve(true);
      }else if(status.denied){
        const alert = await this.alert.create({
          header:'No permission',
          message: 'Please allow camera access in your settings ',
          buttons:[{
            text:'No',
            role:'cancel'
          },
        {
          text:'Open Settings',
          handler:() =>{
            BarcodeScanner.openAppSettings();
            resolve(false);
          }
        }]
        })
      }else{
        resolve(false)
      }
    })
  }


  obtenerData(data:string){
    console.log(data)
    let variables = data.split('?');
    let campos = variables[1].split('&');
    let arr = [];

    for(let a=0;a<campos.length;a++){
      let dato = campos[a].split("=");
      if(dato[0].toLowerCase()=="run"){
        arr.push({'rut':dato[1]});
      }
    }
    console.log(arr)
    return arr[0].rut;
  }

}
