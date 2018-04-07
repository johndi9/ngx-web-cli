import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicHeaderContComponent } from './dynamic-header-cont.component';

describe('DynamicHeaderContComponent', () => {
  let component: DynamicHeaderContComponent;
  let fixture: ComponentFixture<DynamicHeaderContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicHeaderContComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicHeaderContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
