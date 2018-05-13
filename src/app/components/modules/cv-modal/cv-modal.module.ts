import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalModule } from '../../../services/modal/modal.module';
import { TabModule } from '../../../services/tab/tab.module';
import { SharedModule } from '../../shared/shared.module';
import { CvModalContComponent } from './containers/cv-modal-cont/cv-modal-cont.component';
import { CvModalPresComponent } from './presenters/cv-modal-pres/cv-modal-pres.component';
import { CvModalProjectsPresComponent } from './presenters/cv-modal-projects-pres/cv-modal-projects-pres.component';
import { CvModalEmployersPresComponent } from './presenters/cv-modal-employers-pres/cv-modal-employers-pres.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TabModule,
    ModalModule,
  ],
  declarations: [ CvModalContComponent, CvModalPresComponent, CvModalProjectsPresComponent, CvModalEmployersPresComponent ],
  entryComponents: [ CvModalContComponent ]
})
export class CvModalModule {}
