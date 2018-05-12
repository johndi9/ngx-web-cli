import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvModalContComponent } from './cv-modal-cont.component';

describe('CvModalContComponent', () => {
  let component: CvModalContComponent;
  let fixture: ComponentFixture<CvModalContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvModalContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvModalContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
