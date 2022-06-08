import { Component, ContentChildren, Directive, Input, OnInit, QueryList } from '@angular/core';

@Directive({selector: 'pane'})
export class Pane {
  @Input() id!: string;
}

@Component({
  selector: 'tab',
  template: `
    <div class="top-level">Top level panes: {{serializedPanes}}</div>
    <div class="nested">Arbitrary nested panes: {{serializedNestedPanes}}</div>
  `
})
export class Tab {
  @ContentChildren(Pane) topLevelPanes!: QueryList<Pane>;
  @ContentChildren(Pane, {descendants: true}) arbitraryNestedPanes!: QueryList<Pane>;

  get serializedPanes(): string {
    return this.topLevelPanes ? this.topLevelPanes.map(p => p.id).join(', ') : '';
  }
  get serializedNestedPanes(): string {
    return this.arbitraryNestedPanes ? this.arbitraryNestedPanes.map(p => p.id).join(', ') : '';
  }
}

@Component({
  selector: 'app-ng-content-children',
  templateUrl: './ng-content-children.component.html',
  styleUrls: ['./ng-content-children.component.scss']
})
export class NgContentChildrenComponent implements OnInit {
  shouldShow = false;

  constructor() { }

  ngOnInit(): void {
  }

  show() {
    this.shouldShow = true;
  }

}
