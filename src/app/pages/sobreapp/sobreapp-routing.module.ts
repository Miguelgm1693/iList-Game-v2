import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SobreappPage } from './sobreapp.page';

const routes: Routes = [
  {
    path: '',
    component: SobreappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SobreappPageRoutingModule {}
