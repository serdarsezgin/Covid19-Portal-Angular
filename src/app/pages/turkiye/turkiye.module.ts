import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurkiyeRoutingModule } from './turkiye-routing.module';
import { TurkiyeComponent } from './turkiye.component';


@NgModule({
  declarations: [TurkiyeComponent],
  imports: [
    CommonModule,
    TurkiyeRoutingModule
  ]
})
export class TurkiyeModule { }
