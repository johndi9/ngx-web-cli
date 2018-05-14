import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapContComponent } from './containers/google-map-cont/google-map-cont.component';
import { GoogleMapPresComponent } from './presenters/google-map-pres/google-map-pres.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GoogleMapContComponent, GoogleMapPresComponent]
})
export class GoogleMapModule { }
