import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CvModalContComponent } from './containers/cv-modal-cont/cv-modal-cont.component';
import { CvModalPresComponent } from './presenters/cv-modal-pres/cv-modal-pres.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ CvModalContComponent, CvModalPresComponent ]
})
export class CvModalModule {}
