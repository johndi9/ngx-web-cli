import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmployersContComponent } from './containers/employers-cont/employers-cont.component';
import { EmployersPresComponent } from './presenters/employers-pres/employers-pres.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ EmployersContComponent, EmployersPresComponent ],
  exports: [ EmployersContComponent ]
})
export class EmployersModule {}
