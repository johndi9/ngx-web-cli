import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalContComponent } from './personal-cont.component';

describe('PersonalContComponent', () => {
  let component: PersonalContComponent;
  let fixture: ComponentFixture<PersonalContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
