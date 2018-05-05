import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsContComponent } from './projects-cont.component';

describe('ProjectsContComponent', () => {
  let component: ProjectsContComponent;
  let fixture: ComponentFixture<ProjectsContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
