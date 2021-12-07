import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngRoutingModule } from './ang-routing.module';
import { AngMainComponent } from './ang-main.component';
import { ChildAComponent } from './ang-ng-content/child-a/child-a.component';
import { AngNgContentComponent } from './ang-ng-content/ang-ng-content.component';
import { ChildBComponent } from './ang-ng-content/child-b/child-b.component';



@NgModule({
  declarations: [
    AngMainComponent,
    AngNgContentComponent,
    ChildAComponent,
    ChildBComponent,
  ],
  imports: [
    CommonModule,
    AngRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AngModule { }
