import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvCardContComponent } from './cv-card-cont.component';

describe('CvCardContComponent', () => {
  let component: CvCardContComponent;
  let fixture: ComponentFixture<CvCardContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvCardContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvCardContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
