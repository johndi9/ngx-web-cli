import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvModalEmployersPresComponent } from './cv-modal-employers-pres.component';

describe('CvModalEmployersPresComponent', () => {
  let component: CvModalEmployersPresComponent;
  let fixture: ComponentFixture<CvModalEmployersPresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvModalEmployersPresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvModalEmployersPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
