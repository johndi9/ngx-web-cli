import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicHeaderPresComponent } from './dynamic-header-pres.component';

describe('DynamicHeaderPresComponent', () => {
  let component: DynamicHeaderPresComponent;
  let fixture: ComponentFixture<DynamicHeaderPresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicHeaderPresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicHeaderPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
