import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/feature/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'clients',
    loadChildren: () =>
      import('./clients/feature/client-shell/client-shell.module').then(
        (m) => m.ClientShellModule
      ),
  },
  {
    path: 'notes',
    loadChildren: () =>
      import('./notes/feature/notes-shell/notes-shell.module').then(
        (m) => m.NotesShellModule
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
