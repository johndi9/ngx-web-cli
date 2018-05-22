import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { getTestingModuleConfig } from '../../../../../helpers/tests.helper';

import { StickySidebarSmallPresComponent } from './sticky-sidebar-small-pres.component';

describe('StickySidebarSmallPresComponent', () => {
  let component: StickySidebarSmallPresComponent;
  let fixture: ComponentFixture<StickySidebarSmallPresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(getTestingModuleConfig()).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickySidebarSmallPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
