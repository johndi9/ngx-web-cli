import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CvCardPresComponent } from './presenters/cv-card-pres/cv-card-pres.component';
import { CvCardGridPresComponent } from './presenters/cv-card-grid-pres/cv-card-grid-pres.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [ CvCardPresComponent, CvCardGridPresComponent ],
  exports: [ CvCardPresComponent, CvCardGridPresComponent ]
})
export class CvCardModule {}
