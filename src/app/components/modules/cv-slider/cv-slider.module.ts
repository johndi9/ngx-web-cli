import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvSliderContComponent } from './containers/cv-slider-cont/cv-slider-cont.component';
import { CvSliderPresComponent } from './presenters/cv-slider-pres/cv-slider-pres.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CvSliderContComponent, CvSliderPresComponent]
})
export class CvSliderModule { }
