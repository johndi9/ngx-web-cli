import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvModalContComponent } from './containers/cv-modal-cont/cv-modal-cont.component';
import { CvModalPresComponent } from './presenters/cv-modal-pres/cv-modal-pres.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CvModalContComponent, CvModalPresComponent]
})
export class CvModalModule { }
