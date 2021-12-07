import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinCreationComponent } from './join-creation/join-creation.component';
import { RxjsRoutingModule } from './rxjs-routing.module';
import { SubjectComponent } from './subject/subject.component';
import { RxjsEntryComponent } from './rxjs-entry/rxjs-entry.component';



@NgModule({
  declarations: [
    JoinCreationComponent,
    SubjectComponent,
    RxjsEntryComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ]
})
export class RxjsModule { }
