import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '../../../../services/google-maps/google-maps.module';
import { SharedModule } from '../../../shared/shared.module';
import { ContactContComponent } from './containers/contact-cont/contact-cont.component';
import { ContactPresComponent } from './presenters/contact-pres/contact-pres.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GoogleMapsModule,
  ],
  declarations: [ ContactContComponent, ContactPresComponent ],
  exports: [ ContactContComponent ]
})
export class ContactModule {}
