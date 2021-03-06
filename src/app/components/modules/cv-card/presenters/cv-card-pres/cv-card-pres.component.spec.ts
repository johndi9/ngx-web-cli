import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { getTestingModuleConfig } from '../../../../../helpers/tests.helper';
import { CvCardPresComponent } from './cv-card-pres.component';

describe('CvCardPresComponent', () => {
  let component: CvCardPresComponent;
  let fixture: ComponentFixture<CvCardPresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(getTestingModuleConfig()).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvCardPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
