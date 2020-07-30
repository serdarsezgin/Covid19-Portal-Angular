import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IletisimComponent } from './iletisim.component';

const routes: Routes = [{ path: '', component: IletisimComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IletisimRoutingModule { }
