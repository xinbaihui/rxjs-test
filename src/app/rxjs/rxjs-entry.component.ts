import { Component, OnInit } from '@angular/core';
import { iif, Observable, of, timer } from 'rxjs';

@Component({
  selector: 'app-rxjs-entry',
  templateUrl: './rxjs-entry.component.html',
  styleUrls: ['./rxjs-entry.component.scss']
})
export class RxjsEntryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let accessGranted = false;
    const observableIfYouHaveAccess = iif(
      () => accessGranted,
      of('It seems you have an access...'), // Note that only one Observable is passed to the operator.
      );
    
    accessGranted = true;
    observableIfYouHaveAccess.subscribe(
      value => console.log(value),
      err => {},
      () => console.log('The end'),
    );
    
    // Logs:
    // "It seems you have an access..."
    // "The end"
    
    accessGranted = false;
    observableIfYouHaveAccess.subscribe(
      value => console.log(value),
      err => {},
      () => console.log('The end'),
    );
    
    // Logs:
    // "The end"
  }
}

