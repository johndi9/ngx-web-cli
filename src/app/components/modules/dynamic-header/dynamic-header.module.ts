import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicHeaderContComponent } from './containers/dynamic-header-cont/dynamic-header-cont.component';
import { DynamicHeaderPresComponent } from './presenters/dynamic-header-pres/dynamic-header-pres.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DynamicHeaderContComponent, DynamicHeaderPresComponent]
})
export class DynamicHeaderModule { }
