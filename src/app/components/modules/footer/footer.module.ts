import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterContComponent } from './containers/footer-cont/footer-cont.component';
import { FooterPresComponent } from './presenters/footer-pres/footer-pres.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ FooterContComponent, FooterPresComponent ]
})
export class FooterModule {}
