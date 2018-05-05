import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersContComponent } from './employers-cont.component';

describe('EmployersContComponent', () => {
  let component: EmployersContComponent;
  let fixture: ComponentFixture<EmployersContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployersContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployersContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
