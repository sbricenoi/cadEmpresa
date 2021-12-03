import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarEquiposPage } from './listar-equipos.page';

const routes: Routes = [
  {
    path: '',
    component: ListarEquiposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarEquiposPageRoutingModule {}
