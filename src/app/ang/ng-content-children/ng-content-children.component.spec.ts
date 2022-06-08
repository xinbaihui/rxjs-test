import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentChildrenComponent } from './ng-content-children.component';

describe('NgContentChildrenComponent', () => {
  let component: NgContentChildrenComponent;
  let fixture: ComponentFixture<NgContentChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgContentChildrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
