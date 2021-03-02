import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SobreappPageRoutingModule } from './sobreapp-routing.module';

import { SobreappPage } from './sobreapp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SobreappPageRoutingModule
  ],
  declarations: [SobreappPage]
})
export class SobreappPageModule {}
