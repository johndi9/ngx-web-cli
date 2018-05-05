import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SWIPER_CONFIG, SwiperConfigInterface, SwiperModule } from 'ngx-swiper-wrapper';
import { ContactModule } from '../cv-sections/contact/contact.module';
import { EducationModule } from '../cv-sections/education/education.module';
import { EmployersModule } from '../cv-sections/employers/employers.module';
import { OtherInfoModule } from '../cv-sections/other-info/other-info.module';
import { PersonalModule } from '../cv-sections/personal/personal.module';
import { ProjectsModule } from '../cv-sections/projects/projects.module';
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
    // CV Sections - Check if they can be lazy load
    PersonalModule,
    ProjectsModule,
    EmployersModule,
    EducationModule,
    OtherInfoModule,
    ContactModule,
  ],
  declarations: [ CvSliderContComponent, CvSliderPresComponent ],
  exports: [ CvSliderContComponent ],
  providers: [
    { provide: SWIPER_CONFIG, useValue: DEFAULT_SWIPER_CONFIG }
  ]
})
export class CvSliderModule {}
