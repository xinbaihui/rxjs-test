import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  @Input() time = 0;
  interval: any;

  constructor() {
    if (!this.time) {
      this.interval = setInterval(() => {
        this.time = new Date().getTime();
      }, 1000)
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.interval && clearInterval(this.interval);
  }

}
