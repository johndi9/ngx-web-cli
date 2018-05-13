import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CvModule } from '../../../services/cv/cv.module';
import { SharedModule } from '../../shared/shared.module';
import { DateRangeModule } from '../date-range/date-range.module';
import { CvModalContComponent } from './containers/cv-modal-cont/cv-modal-cont.component';
import { CvModalBasePresComponent } from './presenters/cv-modal-base-pres/cv-modal-base-pres.component';
import { CvModalEmployersPresComponent } from './presenters/cv-modal-employers-pres/cv-modal-employers-pres.component';
import { CvModalPresComponent } from './presenters/cv-modal-pres/cv-modal-pres.component';
import { CvModalProjectsPresComponent } from './presenters/cv-modal-projects-pres/cv-modal-projects-pres.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CvModule,
    DateRangeModule,
  ],
  declarations: [ CvModalContComponent, CvModalPresComponent, CvModalProjectsPresComponent, CvModalEmployersPresComponent,
    CvModalBasePresComponent ],
  entryComponents: [ CvModalContComponent ]
})
export class CvModalModule {}
