import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherInfoPresComponent } from './other-info-pres.component';

describe('OtherInfoPresComponent', () => {
  let component: OtherInfoPresComponent;
  let fixture: ComponentFixture<OtherInfoPresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherInfoPresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherInfoPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
