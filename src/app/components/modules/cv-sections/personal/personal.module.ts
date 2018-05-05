import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalContComponent } from './containers/personal-cont/personal-cont.component';
import { PersonalPresComponent } from './presenters/personal-pres/personal-pres.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PersonalContComponent, PersonalPresComponent]
})
export class PersonalModule { }
