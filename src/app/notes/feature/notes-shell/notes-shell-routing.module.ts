import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../notes-list/notes-list.module').then(
        (m) => m.NotesListPageModule
      ),
  },
  {
    path: '/:id',
    loadChildren: () =>
      import('../notes-detail/notes-detail.module').then(
        (m) => m.NotesDetailPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesShellRoutingModule {}
