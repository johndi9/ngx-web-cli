import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { GoogleMapModule } from '../../google-map/google-map.module';
import { ContactContComponent } from './containers/contact-cont/contact-cont.component';
import { ContactPresComponent } from './presenters/contact-pres/contact-pres.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GoogleMapModule
  ],
  declarations: [ ContactContComponent, ContactPresComponent ],
  exports: [ ContactContComponent ]
})
export class ContactModule {}
