import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { PersonalContComponent } from './containers/personal-cont/personal-cont.component';
import { PersonalPresComponent } from './presenters/personal-pres/personal-pres.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [ PersonalContComponent, PersonalPresComponent ],
  exports: [ PersonalContComponent ]
})
export class PersonalModule {}
