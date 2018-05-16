import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { getTestingModuleConfig } from '../../../../../../helpers/tests.helper';
import { OtherInfoContComponent } from './other-info-cont.component';

describe('OtherInfoContComponent', () => {
  let component: OtherInfoContComponent;
  let fixture: ComponentFixture<OtherInfoContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(getTestingModuleConfig()).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherInfoContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
