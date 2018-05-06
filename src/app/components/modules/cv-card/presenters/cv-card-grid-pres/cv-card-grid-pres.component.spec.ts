import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvCardGridPresComponent } from './cv-card-grid-pres.component';

describe('CvCardGridPresComponent', () => {
  let component: CvCardGridPresComponent;
  let fixture: ComponentFixture<CvCardGridPresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvCardGridPresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvCardGridPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
