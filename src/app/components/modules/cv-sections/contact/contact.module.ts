import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ContactContComponent } from './containers/contact-cont/contact-cont.component';
import { ContactPresComponent } from './presenters/contact-pres/contact-pres.component';

const apiKey = 'AIzaSyAVVJ9dsIF1kXP0mfqAfCWOg5oyB1cvRWs';

@NgModule({
  imports: [
    AgmCoreModule.forRoot({ apiKey }),
    CommonModule,
    SharedModule,
  ],
  declarations: [ ContactContComponent, ContactPresComponent ],
  exports: [ ContactContComponent ]
})
export class ContactModule {}
