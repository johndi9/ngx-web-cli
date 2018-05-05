import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPresComponent } from './contact-pres.component';

describe('ContactPresComponent', () => {
  let component: ContactPresComponent;
  let fixture: ComponentFixture<ContactPresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
