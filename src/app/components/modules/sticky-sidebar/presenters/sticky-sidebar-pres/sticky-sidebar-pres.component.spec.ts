import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickySidebarPresComponent } from './sticky-sidebar-pres.component';

describe('StickySidebarPresComponent', () => {
  let component: StickySidebarPresComponent;
  let fixture: ComponentFixture<StickySidebarPresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickySidebarPresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickySidebarPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
