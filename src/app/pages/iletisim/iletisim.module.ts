import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IletisimRoutingModule } from './iletisim-routing.module';
import { IletisimComponent } from './iletisim.component';


@NgModule({
  declarations: [IletisimComponent],
  imports: [
    CommonModule,
    IletisimRoutingModule
  ]
})
export class IletisimModule { }
