import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LogoPresComponent } from './presenters/logo-pres/logo-pres.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ LogoPresComponent ],
  exports: [ LogoPresComponent ]
})
export class LogoModule {}
