import { Component, ContentChild, Directive, OnInit, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appExampleZippyContent]'
})
export class ZippyContentDirective {
  // 在这里，该逻辑指示 Angular 实例化这个模板引用。
  constructor(public templateRef: TemplateRef<unknown>) {}
}

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.scss']
})
export class ChildBComponent implements OnInit {
  expand = false;

  @ContentChild(ZippyContentDirective)
  content!: ZippyContentDirective;
  
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.expand = true
    }, 3000)
  }

}
