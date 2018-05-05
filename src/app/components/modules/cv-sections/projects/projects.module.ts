import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectsContComponent } from './containers/projects-cont/projects-cont.component';
import { ProjectsPresComponent } from './presenters/projects-pres/projects-pres.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ProjectsContComponent, ProjectsPresComponent ],
  exports: [ ProjectsContComponent ]
})
export class ProjectsModule {}
