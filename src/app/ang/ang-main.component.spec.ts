import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngMainComponent } from './ang-main.component';

describe('AngMainComponent', () => {
  let component: AngMainComponent;
  let fixture: ComponentFixture<AngMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
