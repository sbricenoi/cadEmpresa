import { AlertaPageModule } from './../pages/alerta/alerta.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'scanner',
        loadChildren: () => import('../pages/scaner/scaner.module').then(m => m.ScanerPageModule)
      },
      {
        path: 'equipos',
        loadChildren: () => import('../pages/equipos/equipos.module').then(m => m.EquiposPageModule)
      },
      {
        path: 'alerta',
        loadChildren: () => import('../pages/alerta/alerta.module').then(m => m.AlertaPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
