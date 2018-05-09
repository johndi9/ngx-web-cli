import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CvCardModule } from '../../cv-card/cv-card.module';
import { OtherInfoContComponent } from './containers/other-info-cont/other-info-cont.component';
import { OtherInfoPresComponent } from './presenters/other-info-pres/other-info-pres.component';

@NgModule({
  imports: [
    CommonModule,
    CvCardModule,
    SharedModule,
  ],
  declarations: [ OtherInfoContComponent, OtherInfoPresComponent ],
  exports: [ OtherInfoContComponent ]
})
export class OtherInfoModule {}
