import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoJuegoPageRoutingModule } from './info-juego-routing.module';

import { InfoJuegoPage } from './info-juego.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoJuegoPageRoutingModule
  ],
  declarations: [InfoJuegoPage]
})
export class InfoJuegoPageModule {}
