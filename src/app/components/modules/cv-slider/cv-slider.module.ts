import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CvSliderContComponent } from './containers/cv-slider-cont/cv-slider-cont.component';
import { CvSliderPresComponent } from './presenters/cv-slider-pres/cv-slider-pres.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ CvSliderContComponent, CvSliderPresComponent ],
  exports: [ CvSliderContComponent ]
})
export class CvSliderModule {}
