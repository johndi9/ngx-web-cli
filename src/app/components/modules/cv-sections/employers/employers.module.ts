import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CvCardModule } from '../../cv-card/cv-card.module';
import { EmployersContComponent } from './containers/employers-cont/employers-cont.component';
import { EmployersPresComponent } from './presenters/employers-pres/employers-pres.component';

@NgModule({
  imports: [
    CommonModule,
    CvCardModule,
  ],
  declarations: [ EmployersContComponent, EmployersPresComponent ],
  exports: [ EmployersContComponent ]
})
export class EmployersModule {}
