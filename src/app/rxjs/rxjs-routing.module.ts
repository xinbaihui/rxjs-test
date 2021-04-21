import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinCreationComponent } from './join-creation/join-creation.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  { 
    path: '', 
    component: RxjsComponent
  },
  { 
    path: 'join-creation',
    component: JoinCreationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
