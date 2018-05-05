import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationPresComponent } from './education-pres.component';

describe('EducationPresComponent', () => {
  let component: EducationPresComponent;
  let fixture: ComponentFixture<EducationPresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationPresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
