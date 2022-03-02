import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientListPage } from './client-list.page';

const routes: Routes = [
  {
    path: '',
    component: ClientListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientListPageRoutingModule {}
