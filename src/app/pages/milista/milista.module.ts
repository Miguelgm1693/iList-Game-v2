import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MilistaPageRoutingModule } from './milista-routing.module';

import { MilistaPage } from './milista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MilistaPageRoutingModule
  ],
  declarations: [MilistaPage]
})
export class MilistaPageModule {}
