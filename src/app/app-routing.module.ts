import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';


const redirectUnaAuthorizedToLogin = () => redirectUnauthorizedTo(["login"]);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista',
    pathMatch: 'full'
  },
  {
    path: 'lista',
    loadChildren: () => import('./pages/lista/lista.module')
      .then(m => m.ListaPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnaAuthorizedToLogin }
  },
  {
    path: 'crear-juego',
    loadChildren: () => import('./pages/crea/crea.module').then(m => m.CreaPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnaAuthorizedToLogin }
  },

  {
    path: 'editar-juego/:id',
    loadChildren: () => import('./pages/crea/crea.module').then(m => m.CreaPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnaAuthorizedToLogin }

  },

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },


  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroPageModule)
  },


  {
    path: 'restaura-password',
    loadChildren: () => import('./pages/restaura-password/restaura-password.module').then(m => m.RestauraPasswordPageModule)
  },
  
  {
    path: 'sobreapp',
    loadChildren: () => import('./pages/sobreapp/sobreapp.module').then( m => m.SobreappPageModule)
  },

  {
    path: 'milista',
    loadChildren: () => import('./pages/milista/milista.module').then( m => m.MilistaPageModule),
                                                                canActivate:[AngularFireAuthGuard],
                                                                data: { authGuardPipe: redirectUnaAuthorizedToLogin}
  },

  {
    path: 'info-juego',
    loadChildren: () => import('./pages/info-juego/info-juego.module').then( m => m.InfoJuegoPageModule)
  },
  
  {
    path: '**',
    redirectTo: 'lista',
    pathMatch: 'full'
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
