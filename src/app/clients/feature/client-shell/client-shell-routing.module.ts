import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../client-list/client-list.module').then(
        (m) => m.ClientListPageModule
      ),
  },
  {
    path: ':id',
    loadChildren: () =>
      import('../client-detail/client-detail.module').then(
        (m) => m.ClientDetailPageModule
      ),
  },
  {
    path: ':id/survey',
    loadChildren: () =>
      import('../client-survey/client-survey.module').then(
        (m) => m.ClientSurveyPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientShellRoutingModule {}
