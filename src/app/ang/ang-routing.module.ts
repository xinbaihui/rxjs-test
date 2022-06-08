import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngMainComponent } from './ang-main.component';
import { AngNgContentComponent } from './ang-ng-content/ang-ng-content.component';
import { NgContentChildrenComponent } from './ng-content-children/ng-content-children.component';

const routes: Routes = [{
  path: '', component: AngMainComponent
}, {
  path: 'ng-content', component: AngNgContentComponent
}, {
  path: 'content-children', component: NgContentChildrenComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngRoutingModule { }
