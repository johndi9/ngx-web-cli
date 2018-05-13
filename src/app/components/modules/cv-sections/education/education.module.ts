import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CvCardModule } from '../../cv-card/cv-card.module';
import { DateRangeModule } from '../../date-range/date-range.module';
import { EducationContComponent } from './containers/education-cont/education-cont.component';
import { EducationPresComponent } from './presenters/education-pres/education-pres.component';

@NgModule({
  imports: [
    CommonModule,
    CvCardModule,
    SharedModule,
    DateRangeModule,
  ],
  declarations: [ EducationContComponent, EducationPresComponent ],
  exports: [ EducationContComponent ]
})
export class EducationModule {}
