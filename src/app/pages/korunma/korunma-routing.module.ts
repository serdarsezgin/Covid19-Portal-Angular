import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KorunmaComponent } from './korunma.component';

const routes: Routes = [{ path: '', component: KorunmaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KorunmaRoutingModule { }
