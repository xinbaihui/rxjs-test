import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinCreationComponent } from './join-creation/join-creation.component';
import { RxjsRoutingModule } from './rxjs-routing.module';
import { TimeComponent } from './time/time.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SubjectComponent } from './subject/subject.component';



@NgModule({
  declarations: [
    JoinCreationComponent,
    TimeComponent,
    RxjsComponent,
    SubjectComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ]
})
export class RxjsModule { }
