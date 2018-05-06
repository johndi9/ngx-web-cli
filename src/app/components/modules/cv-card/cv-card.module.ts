import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MonthsDurationModule } from '../../../pipes/months-duration/months-duration.module';
import { SharedModule } from '../../shared/shared.module';
import { CvCardGridPresComponent } from './presenters/cv-card-grid-pres/cv-card-grid-pres.component';
import { CvCardPresComponent } from './presenters/cv-card-pres/cv-card-pres.component';
import { CvCardRangeDatePresComponent } from './presenters/cv-card-range-date-pres/cv-card-range-date-pres.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MonthsDurationModule,
  ],
  declarations: [ CvCardPresComponent, CvCardGridPresComponent, CvCardRangeDatePresComponent ],
  exports: [ CvCardPresComponent, CvCardGridPresComponent, CvCardRangeDatePresComponent ]
})
export class CvCardModule {}
