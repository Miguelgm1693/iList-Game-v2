import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreaPageRoutingModule } from './crea-routing.module';

import { CreaPage } from './crea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreaPageRoutingModule
  ],
  declarations: [CreaPage]
})
export class CreaPageModule {}
