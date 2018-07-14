import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MomentModule } from 'ngx-moment';
import { MonthsDurationModule } from '../../../pipes/months-duration/months-duration.module';
import { SharedModule } from '../../shared/shared.module';
import { DateRangePresComponent } from './presenters/date-range-pres/date-range-pres.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MomentModule,
    MonthsDurationModule,
  ],
  declarations: [ DateRangePresComponent ],
  exports: [ DateRangePresComponent ]
})
export class DateRangeModule {}
