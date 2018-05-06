import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CvCardPresComponent } from './presenters/cv-card-pres/cv-card-pres.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [ CvCardPresComponent ],
  exports: [ CvCardPresComponent ]
})
export class CvCardModule {}
