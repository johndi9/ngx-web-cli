import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { getTestingModuleConfig } from '../../../../../helpers/tests.helper';

import { CvModalBasePresComponent } from './cv-modal-base-pres.component';

describe('CvModalBasePresComponent', () => {
  let component: CvModalBasePresComponent;
  let fixture: ComponentFixture<CvModalBasePresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(getTestingModuleConfig()).compileComponents();
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
