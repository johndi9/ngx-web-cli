import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { getTestingModuleConfig } from '../../../../../helpers/tests.helper';
import { CvModalProjectsPresComponent } from './cv-modal-projects-pres.component';

describe('CvModalProjectsPresComponent', () => {
  let component: CvModalProjectsPresComponent;
  let fixture: ComponentFixture<CvModalProjectsPresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(getTestingModuleConfig()).compileComponents();
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
