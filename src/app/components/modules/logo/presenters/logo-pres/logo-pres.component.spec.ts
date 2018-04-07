import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoPresComponent } from './logo-pres.component';

describe('LogoPresComponent', () => {
  let component: LogoPresComponent;
  let fixture: ComponentFixture<LogoPresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoPresComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
