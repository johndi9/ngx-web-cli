import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsPresComponent } from './projects-pres.component';

describe('ProjectsPresComponent', () => {
  let component: ProjectsPresComponent;
  let fixture: ComponentFixture<ProjectsPresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsPresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
