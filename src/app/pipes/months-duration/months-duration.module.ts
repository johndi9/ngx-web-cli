import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MonthsDurationPipe } from './months-duration.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ MonthsDurationPipe ],
  exports: [ MonthsDurationPipe ],
})
export class MonthsDurationModule {}
