import { Component, OnInit } from '@angular/core';
import { combineLatest, concat, forkJoin, interval, merge, of, partition, race, zip } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-join-creation',
  templateUrl: './join-creation.component.html',
  styleUrls: ['./join-creation.component.scss']
})
export class JoinCreationComponent implements OnInit {
  value: any;

  constructor() { }

  ngOnInit(): void {
  }

  showForkJoin() {
    const ob1 = interval(1000).pipe(take(3));
    const ob2 = interval(2000).pipe(take(2));
    const ob3 = interval(3000).pipe(take(2));
  
    forkJoin([ob1, ob2, ob3]).subscribe((res) => {
      console.log('fornJoin:' + res); // 211
      // this.value =  res;
    })
  }

  showZip() {
    const ob1 = interval(1000).pipe(take(3));
    const ob2 = interval(2000).pipe(take(2));
    const ob3 = interval(3000).pipe(take(2));
  
    zip(ob1, ob2, ob3).subscribe((res) => {
      console.log('zip:' + res); // 200 210 211
    })
  }

  showCombineLatest() {
    const ob1 = interval(1000).pipe(take(3));
    const ob2 = interval(2000).pipe(take(2));
    const ob3 = interval(3000).pipe(take(2));
  
    combineLatest([ob1, ob2, ob3]).subscribe((res) => {
      console.log('combineLatest:' + res); // 200 210 211
    })
  }

  showConcat() {
    const ob1 = interval(1000).pipe(take(3));
    const ob2 = interval(2000).pipe(take(2));
    const ob3 = interval(3000).pipe(take(2));
  
    concat(ob1, ob2, ob3).subscribe((res) => {
      console.log('concat:' + res);  // 0 1 2 0  1 0   1
    })
  }

  showMerge() {
    const ob1 = interval(1000).pipe(take(3));
    const ob2 = interval(2000).pipe(take(2));
    const ob3 = interval(3000).pipe(take(2));
  
     merge(ob1, ob2, ob3).subscribe((res) => {
      console.log('merge:' + res);  // 0  10 20 1 1
    })
  }

  showRace() {
    const ob1 = interval(1000).pipe(take(3));
    const ob2 = interval(2000).pipe(take(2));
    const ob3 = interval(3000).pipe(take(2));
  
    race(ob1, ob2, ob3).subscribe((res) => {
      console.log('race:' + res);  // 0 1 2
    })
  }

  showPartition() {
    const ob1 = interval(1000).pipe(take(3));
    const ob2 = interval(2000).pipe(take(2));
    const ob3 = interval(3000).pipe(take(2));
  
    const [ob4, ob5] = partition(ob1, (val, index) => val % 2 !== 0)
    ob4.subscribe((res) => {
      console.log('partition1:' + res);  //   1
    })
    ob5.subscribe((res) => {
      console.log('partition2:' + res);  // 0   2
    })
  }

}
