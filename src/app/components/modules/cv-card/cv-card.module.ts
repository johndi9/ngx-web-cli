import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CvCardContComponent } from './containers/cv-card-cont/cv-card-cont.component';
import { CvCardGridPresComponent } from './presenters/cv-card-grid-pres/cv-card-grid-pres.component';
import { CvCardPresComponent } from './presenters/cv-card-pres/cv-card-pres.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [ CvCardPresComponent, CvCardGridPresComponent, CvCardContComponent ],
  exports: [ CvCardContComponent, CvCardGridPresComponent ]
})
export class CvCardModule {}
