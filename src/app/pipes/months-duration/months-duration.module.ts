import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthsDurationPipe } from './months-duration.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MonthsDurationPipe]
})
export class MonthsDurationModule { }
