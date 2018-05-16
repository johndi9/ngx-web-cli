import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { getTestingModuleConfig } from '../../../../../../helpers/tests.helper';
import { PersonalPresComponent } from './personal-pres.component';

describe('PersonalPresComponent', () => {
  let component: PersonalPresComponent;
  let fixture: ComponentFixture<PersonalPresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(getTestingModuleConfig()).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
