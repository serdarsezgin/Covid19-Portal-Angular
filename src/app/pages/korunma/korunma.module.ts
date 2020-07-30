import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KorunmaRoutingModule } from './korunma-routing.module';
import { KorunmaComponent } from './korunma.component';


@NgModule({
  declarations: [KorunmaComponent],
  imports: [
    CommonModule,
    KorunmaRoutingModule
  ]
})
export class KorunmaModule { }
