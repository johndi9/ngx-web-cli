import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPresComponent } from './footer-pres.component';

describe('FooterPresComponent', () => {
  let component: FooterPresComponent;
  let fixture: ComponentFixture<FooterPresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterPresComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
