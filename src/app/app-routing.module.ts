import { LoginPage } from './pages/login/login.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'alerta',
    loadChildren: () => import('./pages/alerta/alerta.module').then( m => m.AlertaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'equipos',
    loadChildren: () => import('./pages/equipos/equipos.module').then( m => m.EquiposPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./pages/bienvenida/bienvenida.module').then( m => m.BienvenidaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'scaner',
    loadChildren: () => import('./pages/scaner/scaner.module').then( m => m.ScanerPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'detalle-alerta/:alerta',
    loadChildren: () => import('./pages/detalle-alerta/detalle-alerta.module').then( m => m.DetalleAlertaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'detalle-equipo',
    loadChildren: () => import('./pages/detalle-equipo/detalle-equipo.module').then( m => m.DetalleEquipoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'detalle-reserva',
    loadChildren: () => import('./pages/detalle-reserva/detalle-reserva.module').then( m => m.DetalleReservaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'listar-equipos',
    loadChildren: () => import('./pages/listar-equipos/listar-equipos.module').then( m => m.ListarEquiposPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [AuthGuard]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers:[AuthService]
})
export class AppRoutingModule {}
