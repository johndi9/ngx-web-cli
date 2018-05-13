import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRangePresComponent } from './date-range-pres.component';

describe('DateRangePresComponent', () => {
  let component: DateRangePresComponent;
  let fixture: ComponentFixture<DateRangePresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateRangePresComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateRangePresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
