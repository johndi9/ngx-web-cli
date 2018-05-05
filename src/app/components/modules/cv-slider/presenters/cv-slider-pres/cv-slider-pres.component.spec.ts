import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvSliderPresComponent } from './cv-slider-pres.component';

describe('CvSliderPresComponent', () => {
  let component: CvSliderPresComponent;
  let fixture: ComponentFixture<CvSliderPresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvSliderPresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvSliderPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
