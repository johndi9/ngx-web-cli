import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersPresComponent } from './employers-pres.component';

describe('EmployersPresComponent', () => {
  let component: EmployersPresComponent;
  let fixture: ComponentFixture<EmployersPresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployersPresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployersPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
