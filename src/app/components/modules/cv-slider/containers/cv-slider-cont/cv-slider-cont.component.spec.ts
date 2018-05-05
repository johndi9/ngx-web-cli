import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvSliderContComponent } from './cv-slider-cont.component';

describe('CvSliderContComponent', () => {
  let component: CvSliderContComponent;
  let fixture: ComponentFixture<CvSliderContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvSliderContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvSliderContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
