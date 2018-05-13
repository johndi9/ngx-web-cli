import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvModalBasePresComponent } from './cv-modal-base-pres.component';

describe('CvModalBasePresComponent', () => {
  let component: CvModalBasePresComponent;
  let fixture: ComponentFixture<CvModalBasePresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvModalBasePresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvModalBasePresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
