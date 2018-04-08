import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CvService } from './cv.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ CvService ],
  declarations: []
})
export class CvModule {}
