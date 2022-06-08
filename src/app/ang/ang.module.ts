import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngRoutingModule } from './ang-routing.module';
import { AngMainComponent } from './ang-main.component';
import { ChildAComponent } from './ang-ng-content/child-a/child-a.component';
import { AngNgContentComponent } from './ang-ng-content/ang-ng-content.component';
import { ChildBComponent, ZippyContentDirective } from './ang-ng-content/child-b/child-b.component';
import { NgContentChildrenComponent, Pane, Tab } from './ng-content-children/ng-content-children.component';



@NgModule({
  declarations: [
    AngMainComponent,
    AngNgContentComponent,
    ChildAComponent,
    ChildBComponent,
    ZippyContentDirective,
    NgContentChildrenComponent,
    Tab,
    Pane
  ],
  imports: [
    CommonModule,
    AngRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AngModule { }
