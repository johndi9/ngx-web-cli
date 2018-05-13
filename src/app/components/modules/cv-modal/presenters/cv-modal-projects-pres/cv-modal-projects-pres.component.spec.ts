import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvModalProjectsPresComponent } from './cv-modal-projects-pres.component';

describe('CvModalProjectsPresComponent', () => {
  let component: CvModalProjectsPresComponent;
  let fixture: ComponentFixture<CvModalProjectsPresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvModalProjectsPresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvModalProjectsPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
