import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationOperatorsComponent } from './creation-operators.component';

describe('CreationOperatorsComponent', () => {
  let component: CreationOperatorsComponent;
  let fixture: ComponentFixture<CreationOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationOperatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
