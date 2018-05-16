import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { getTestingModuleConfig } from '../../../../../helpers/tests.helper';

import { GoogleMapPresComponent } from './google-map-pres.component';

describe('GoogleMapPresComponent', () => {
  let component: GoogleMapPresComponent;
  let fixture: ComponentFixture<GoogleMapPresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(getTestingModuleConfig())
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
