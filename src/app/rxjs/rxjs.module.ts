import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinCreationComponent } from './join-creation/join-creation.component';
import { RxjsRoutingModule } from './rxjs-routing.module';
import { SubjectComponent } from './subject/subject.component';
import { RxjsEntryComponent } from './rxjs-entry.component';
import { CreationOperatorsComponent } from './creation-operators/creation-operators.component';



@NgModule({
  declarations: [
    JoinCreationComponent,
    SubjectComponent,
    RxjsEntryComponent,
    CreationOperatorsComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ]
})
export class RxjsModule { }
