import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurkiyeComponent } from './turkiye.component';

const routes: Routes = [{ path: '', component: TurkiyeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurkiyeRoutingModule { }
