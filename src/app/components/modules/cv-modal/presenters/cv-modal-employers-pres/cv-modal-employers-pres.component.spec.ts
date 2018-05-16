import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { getTestingModuleConfig } from '../../../../../helpers/tests.helper';
import { CvModalEmployersPresComponent } from './cv-modal-employers-pres.component';

describe('CvModalEmployersPresComponent', () => {
  let component: CvModalEmployersPresComponent;
  let fixture: ComponentFixture<CvModalEmployersPresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(getTestingModuleConfig()).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvModalEmployersPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
