import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FooterContComponent } from './containers/footer-cont/footer-cont.component';
import { FooterPresComponent } from './presenters/footer-pres/footer-pres.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ FooterContComponent, FooterPresComponent ],
  exports: [ FooterContComponent ]
})
export class FooterModule {}
