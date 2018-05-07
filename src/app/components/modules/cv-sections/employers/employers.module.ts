import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CvCardModule } from '../../cv-card/cv-card.module';
import { EmployersContComponent } from './containers/employers-cont/employers-cont.component';
import { EmployersPresComponent } from './presenters/employers-pres/employers-pres.component';

@NgModule({
  imports: [
    CommonModule,
    CvCardModule,
    SharedModule,
  ],
  declarations: [ EmployersContComponent, EmployersPresComponent ],
  exports: [ EmployersContComponent ]
})
export class EmployersModule {}
