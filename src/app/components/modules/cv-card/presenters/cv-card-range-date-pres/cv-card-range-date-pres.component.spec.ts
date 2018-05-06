import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvCardRangeDatePresComponent } from './cv-card-range-date-pres.component';

describe('CvCardRangeDatePresComponent', () => {
  let component: CvCardRangeDatePresComponent;
  let fixture: ComponentFixture<CvCardRangeDatePresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvCardRangeDatePresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvCardRangeDatePresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
