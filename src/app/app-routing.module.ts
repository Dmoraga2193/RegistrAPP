import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './service/auth-guard.service';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./home/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./home/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'docente',
    loadChildren: () => import('./docente/docente.module').then( m => m.DocentePageModule)
  },
  {
    path: 'estudiante',
    loadChildren: () => import('./estudiante/estudiante.module').then( m => m.EstudiantePageModule)
  },
  {
    path: 'generar',
    loadChildren: () => import('./docente/generar/generar.module').then( m => m.GenerarPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./docente/generar/qr/qr.module').then( m => m.QrPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
