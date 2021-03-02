import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreaPage } from './crea.page';

const routes: Routes = [
  {
    path: '',
    component: CreaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreaPageRoutingModule {}
