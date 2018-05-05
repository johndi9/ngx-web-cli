import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationContComponent } from './containers/education-cont/education-cont.component';
import { EducationPresComponent } from './presenters/education-pres/education-pres.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EducationContComponent, EducationPresComponent]
})
export class EducationModule { }
