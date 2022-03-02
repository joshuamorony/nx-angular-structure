import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientDetailPage } from './client-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ClientDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientDetailPageRoutingModule {}
