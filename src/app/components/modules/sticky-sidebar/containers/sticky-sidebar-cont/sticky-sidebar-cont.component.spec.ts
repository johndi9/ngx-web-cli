import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickySidebarContComponent } from './sticky-sidebar-cont.component';

describe('StickySidebarContComponent', () => {
  let component: StickySidebarContComponent;
  let fixture: ComponentFixture<StickySidebarContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickySidebarContComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickySidebarContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
