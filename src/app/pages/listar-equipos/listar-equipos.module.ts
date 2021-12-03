import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarEquiposPageRoutingModule } from './listar-equipos-routing.module';

import { ListarEquiposPage } from './listar-equipos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarEquiposPageRoutingModule
  ],
  declarations: [ListarEquiposPage]
})
export class ListarEquiposPageModule {}
