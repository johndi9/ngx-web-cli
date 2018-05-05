import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SWIPER_CONFIG, SwiperConfigInterface, SwiperModule } from 'ngx-swiper-wrapper';
import { CvSliderContComponent } from './containers/cv-slider-cont/cv-slider-cont.component';
import { CvSliderPresComponent } from './presenters/cv-slider-pres/cv-slider-pres.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
  ],
  declarations: [ CvSliderContComponent, CvSliderPresComponent ],
  exports: [ CvSliderContComponent ],
  providers: [
    { provide: SWIPER_CONFIG, useValue: DEFAULT_SWIPER_CONFIG }
  ]
})
export class CvSliderModule {}
