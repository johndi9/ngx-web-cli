import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvCardContComponent } from './containers/cv-card-cont/cv-card-cont.component';
import { CvCardPresComponent } from './presenters/cv-card-pres/cv-card-pres.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CvCardContComponent, CvCardPresComponent]
})
export class CvCardModule { }
