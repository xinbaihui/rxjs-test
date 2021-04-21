import { Component } from '@angular/core';

import { combineLatest, forkJoin, interval, zip, concat, merge, race, partition } from 'rxjs'; 
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-test';

  constructor() {}

}
