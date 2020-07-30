import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DunyaRoutingModule } from './dunya-routing.module';
import { DunyaComponent } from './dunya.component';


@NgModule({
  declarations: [DunyaComponent],
  imports: [
    CommonModule,
    DunyaRoutingModule
  ]
})
export class DunyaModule { }
