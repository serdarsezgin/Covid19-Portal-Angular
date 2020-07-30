import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DunyaComponent } from './dunya.component';

const routes: Routes = [{ path: '', component: DunyaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DunyaRoutingModule { }
