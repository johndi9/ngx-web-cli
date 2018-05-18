import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickySidebarSmallPresComponent } from './sticky-sidebar-small-pres.component';

describe('StickySidebarSmallPresComponent', () => {
  let component: StickySidebarSmallPresComponent;
  let fixture: ComponentFixture<StickySidebarSmallPresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickySidebarSmallPresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickySidebarSmallPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
