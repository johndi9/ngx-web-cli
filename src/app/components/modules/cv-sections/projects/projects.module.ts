import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsContComponent } from './containers/projects-cont/projects-cont.component';
import { ProjectsPresComponent } from './presenters/projects-pres/projects-pres.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProjectsContComponent, ProjectsPresComponent]
})
export class ProjectsModule { }
