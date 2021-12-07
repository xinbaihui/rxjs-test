import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'rxjs' },
  {
    path: 'rxjs',
    loadChildren: () => import('./rxjs/rxjs.module').then((m) => m.RxjsModule),
  },
  {
    path: 'ang',
    loadChildren: () => import('./ang/ang.module').then((m) => m.AngModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
