import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactContComponent } from './contact-cont.component';

describe('ContactContComponent', () => {
  let component: ContactContComponent;
  let fixture: ComponentFixture<ContactContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
