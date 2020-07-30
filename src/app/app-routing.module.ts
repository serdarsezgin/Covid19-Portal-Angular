

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
{ path: 'turkiye', loadChildren: () => import('./pages/turkiye/turkiye.module').then(m => m.TurkiyeModule) },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
 
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
{ path: 'dunya', loadChildren: () => import('./pages/dunya/dunya.module').then(m => m.DunyaModule) },
{ path: 'korunma', loadChildren: () => import('./pages/korunma/korunma.module').then(m => m.KorunmaModule) },
{ path: 'iletisim', loadChildren: () => import('./pages/iletisim/iletisim.module').then(m => m.IletisimModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }