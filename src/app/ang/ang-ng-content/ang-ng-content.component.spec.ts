import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngNgContentComponent } from './ang-ng-content.component';

describe('AngNgContentComponent', () => {
  let component: AngNgContentComponent;
  let fixture: ComponentFixture<AngNgContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngNgContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
