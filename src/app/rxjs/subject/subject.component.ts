import { Component, OnInit } from '@angular/core';
import { Subject, ReplaySubject, interval } from 'rxjs';
import { mapTo, pluck, share, shareReplay, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // share: 用来避免重复副作用的
  shareTest() {
    // 1秒后发出值 0 (timer is cold stream, 每次订阅都会产生全新的数据流)
    const source = interval(1000).pipe(take(3));
    // 输出副作用，然后发出结果
    const example = source.pipe(
      tap(() => console.log('***SIDE EFFECT***')),
      // mapTo('***RESULT***')
    );

    // 不共享的话，副作用会执行两次***
    // example.subscribe(val => console.log('1:'+ val));
    // setTimeout(() => {
    //   example.subscribe(val => console.log('2:'+ val));
    // }, 1500)

    // 在多个订阅者间共享 observable
    const sharedExample = example.pipe(share());
    // 共享的话，副作用只执行一次***（后订阅者订阅的时候如果数据流完结了，那就无法避免副作用了，数据流会重新产生一次)
    sharedExample.subscribe(val => console.log('3:'+ val));
    setTimeout(() => {
      sharedExample.subscribe(val => console.log('4:'+ val))
    }, 5000);
  }

  // https://rxjs-cn.github.io/learn-rxjs-operators/operators/multicasting/sharereplay.html
  // 如果深入源码，我们可以发现两者之间使用的技术是类似的。
  // 当订阅发生后，shareReplay 会订阅源 observable，并通过内部的 ReplaySubject 来发送值:
  shareReplayTest() {
    // 使用 subject 模拟 url 的变化
    const routeEnd = new Subject<{data: any, url: string}>();

    // 提取 url 并与后来订阅者共享
    const lastUrl = routeEnd.pipe(
      tap(_ => console.log('executed')),
      pluck('url'),
      // 默认为所有值，因此我们将其设置为仅保留并重放最后1个值
      shareReplay(1)
    );

    // 起始订阅者是必须的
    // 输出: 'my-path' 'my-path_2'
    const initialSubscriber = lastUrl.subscribe((param) => {
      console.log('init:' + param);
    });

    // 模拟路由变化
    // 输出: 'executed', 'my-path'
    routeEnd.next({data: {}, url: 'my-path'});
    routeEnd.next({data: {}, url: 'my-path_2'});

    // 输出: 'my-path_2'(如果没有shareReplay 这里就没有输出)
    const lateSubscriber_1 = lastUrl.subscribe((param) => {
      console.log('last1:' + param);
    });

    // 输出: 'my-path_2' (如果没有shareReplay 这里就没有输出)
    const lateSubscriber_2 = lastUrl.subscribe((param) => {
      console.log('last2:' + param);
    });

    // 输出: 'my-path_2' (如果没有shareReplay 这里就没有输出)
    const lateSubscriber_3 = lastUrl.subscribe((param) => {
      console.log('last3:' + param);
    });
  }

  replaySubjectTest() {
    // 使用 subject 模拟 url 的变化
    const routeEnd = new Subject<{data: any, url: string}>();

    // 使用 ReplaySubject 来替代 shareReplay
    const shareWithReplay = new ReplaySubject();

    // 取 url 并与后来订阅者共享
    const lastUrl = routeEnd.pipe(
      pluck('url')
    )
    .subscribe(val => shareWithReplay.next(val));

    // 模拟路由变化
    routeEnd.next({data: {}, url: 'my-path'});

    // 订阅 ReplaySubject 
    // 输出: 'my path'
    // 如果shareWithReplay不是ReplaySubject，而是Subject，那这两个订阅都没有输出
    shareWithReplay.subscribe(console.log);
    shareWithReplay.subscribe(console.log);
  }

}
