import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinCreationComponent } from './join-creation/join-creation.component';
import { RxjsEntryComponent } from './rxjs-entry.component';

const routes: Routes = [
  { 
    path: '', 
    component: RxjsEntryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
