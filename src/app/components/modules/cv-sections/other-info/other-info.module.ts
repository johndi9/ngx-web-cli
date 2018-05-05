import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherInfoContComponent } from './containers/other-info-cont/other-info-cont.component';
import { OtherInfoPresComponent } from './presenters/other-info-pres/other-info-pres.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OtherInfoContComponent, OtherInfoPresComponent]
})
export class OtherInfoModule { }
