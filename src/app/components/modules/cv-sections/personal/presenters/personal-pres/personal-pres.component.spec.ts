import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalPresComponent } from './personal-pres.component';

describe('PersonalPresComponent', () => {
  let component: PersonalPresComponent;
  let fixture: ComponentFixture<PersonalPresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalPresComponent ]
    })
    .compileComponents();
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
