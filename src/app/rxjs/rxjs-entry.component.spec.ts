import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsEntryComponent } from './rxjs-entry.component';

describe('RxjsEntryComponent', () => {
  let component: RxjsEntryComponent;
  let fixture: ComponentFixture<RxjsEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
