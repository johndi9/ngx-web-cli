import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { getTestingModuleConfig } from '../../../../../helpers/tests.helper';
import { GoogleMapContComponent } from './google-map-cont.component';

describe('GoogleMapContComponent', () => {
  let component: GoogleMapContComponent;
  let fixture: ComponentFixture<GoogleMapContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(getTestingModuleConfig())
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
