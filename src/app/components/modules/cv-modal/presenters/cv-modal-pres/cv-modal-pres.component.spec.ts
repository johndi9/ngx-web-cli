import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvModalPresComponent } from './cv-modal-pres.component';

describe('CvModalPresComponent', () => {
  let component: CvModalPresComponent;
  let fixture: ComponentFixture<CvModalPresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvModalPresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvModalPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
