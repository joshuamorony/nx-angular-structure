import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesDetailPage } from './notes-detail.page';

const routes: Routes = [
  {
    path: '',
    component: NotesDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesDetailPageRoutingModule {}
