import { Component, OnInit } from '@angular/core';
import { of, timer } from 'rxjs';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-creation-operators',
  templateUrl: './creation-operators.component.html',
  styleUrls: ['./creation-operators.component.scss']
})
export class CreationOperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showTimer() {
    // const source = of(1,2,3);
    // timer(dueTime): 延时作用，相当于daley,  setTimeout
    // timer(3000)
    // .pipe(concatMap(() => source))
    // .subscribe(val => console.log(val));

    // 相当于interval(1000), 只是首个数字0的延时由1s改为3s
    // timer(3000, 1000)
    //   .subscribe(val => console.log(val));
  }
}
