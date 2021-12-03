import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleAlertaPageRoutingModule } from './detalle-alerta-routing.module';

import { DetalleAlertaPage } from './detalle-alerta.page';

import { GoogleMapsModule } from '@angular/google-maps';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: 'http://onlineweb-sb.com:3001/prueba',
 options: {transports: ['websocket','polling'],path: "/prueba/",reconnection: true,timeout: 10000 } };
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleAlertaPageRoutingModule,
    GoogleMapsModule,
    SocketIoModule.forRoot(config)
  ],
  declarations: [DetalleAlertaPage]
})
export class DetalleAlertaPageModule {}
