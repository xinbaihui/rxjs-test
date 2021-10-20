import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // defination
    const onSubscribe = (observer: any) => {
      let i = 1;
      const handle = setInterval(() => {
        console.log('create data i:' + i);
        observer.next(i++);
        // if(i>3) {
        //   observer.complete()                                      ;
        // }
      }, 1000);
      // observer.error("Error");
      // observer.complete();
      return {
        unsubscribe: () => {
          clearInterval(handle);
        }
      }
    }
    
    const source$ = new Observable(onSubscribe);
    
    const observer = {
      next: (val: any) => console.log(val),
      error: (err: any) => console.log(err),
      complete: () => console.log("No more data")
    }
    
    const subscription = source$.subscribe(observer);

    setTimeout(() => {
      subscription.unsubscribe();
    }, 3500)
  }

  showTimer() {
    timer(1000).subscribe((val) => {
      console.log(val)
    })
  }

}
