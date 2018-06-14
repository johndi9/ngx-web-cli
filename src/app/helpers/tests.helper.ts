import { AgmCoreModule } from '@agm/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { CvCardModule } from '../components/modules/cv-card/cv-card.module';
import { CvModalModule } from '../components/modules/cv-modal/cv-modal.module';
import { ContactModule } from '../components/modules/cv-sections/contact/contact.module';
import { EducationModule } from '../components/modules/cv-sections/education/education.module';
import { EmployersModule } from '../components/modules/cv-sections/employers/employers.module';
import { OtherInfoModule } from '../components/modules/cv-sections/other-info/other-info.module';
import { PersonalModule } from '../components/modules/cv-sections/personal/personal.module';
import { ProjectsModule } from '../components/modules/cv-sections/projects/projects.module';
import { CvSliderModule } from '../components/modules/cv-slider/cv-slider.module';
import { DateRangeModule } from '../components/modules/date-range/date-range.module';
import { DynamicHeaderModule } from '../components/modules/dynamic-header/dynamic-header.module';
import { FooterModule } from '../components/modules/footer/footer.module';
import { GoogleMapModule } from '../components/modules/google-map/google-map.module';
import { StickySidebarModule } from '../components/modules/sticky-sidebar/sticky-sidebar.module';
import { HomeModule } from '../components/pages/home/home.module';
import { MonthsDurationModule } from '../pipes/months-duration/months-duration.module';
import { CvModule } from '../services/cv/cv.module';
import { ModalModule } from '../services/modal/modal.module';
import { TabModule } from '../services/tab/tab.module';

export const getTestingModuleConfig = () => ({
  imports: getImports(),
  providers: getProviders()
});

export const getImports = () => ([
  AgmCoreModule.forRoot({}),
  CommonModule,
  ContactModule,
  CvCardModule,
  CvModalModule,
  CvModule,
  CvSliderModule,
  DateRangeModule,
  DynamicHeaderModule,
  GoogleMapModule,
  EducationModule,
  EmployersModule,
  FooterModule,
  HomeModule,
  ModalModule,
  MonthsDurationModule,
  OtherInfoModule,
  PersonalModule,
  ProjectsModule,
  RouterModule.forRoot([]),
  StickySidebarModule,
  StoreModule.forRoot({}),
  TabModule,
  TranslateModule.forRoot({})
]);

export const getProviders = () => ([
  { provide: APP_BASE_HREF, useValue: '/' },
  { provide: MAT_DIALOG_DATA, useValue: {} }
]);
