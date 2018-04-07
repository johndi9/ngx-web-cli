import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LogoModule } from '../logo/logo.module';
import { DynamicHeaderContComponent } from './containers/dynamic-header-cont/dynamic-header-cont.component';
import { DynamicHeaderPresComponent } from './presenters/dynamic-header-pres/dynamic-header-pres.component';

@NgModule({
  imports: [
    CommonModule,
    LogoModule,
  ],
  declarations: [ DynamicHeaderContComponent, DynamicHeaderPresComponent ],
  exports: [ DynamicHeaderContComponent ]
})
export class DynamicHeaderModule {}
