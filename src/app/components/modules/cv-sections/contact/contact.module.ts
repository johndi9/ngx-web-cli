import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactContComponent } from './containers/contact-cont/contact-cont.component';
import { ContactPresComponent } from './presenters/contact-pres/contact-pres.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ContactContComponent, ContactPresComponent ],
  exports: [ ContactContComponent ]
})
export class ContactModule {}
