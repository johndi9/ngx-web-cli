import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CvCardModule } from '../../cv-card/cv-card.module';
import { DateRangeModule } from '../../date-range/date-range.module';
import { ProjectsContComponent } from './containers/projects-cont/projects-cont.component';
import { ProjectsPresComponent } from './presenters/projects-pres/projects-pres.component';

@NgModule({
  imports: [
    CommonModule,
    CvCardModule,
    SharedModule,
    DateRangeModule,
  ],
  declarations: [ ProjectsContComponent, ProjectsPresComponent ],
  exports: [ ProjectsContComponent ]
})
export class ProjectsModule {}
