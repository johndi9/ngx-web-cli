import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterContComponent } from './footer-cont.component';

describe('FooterContComponent', () => {
  let component: FooterContComponent;
  let fixture: ComponentFixture<FooterContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterContComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
