import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoogleMapContComponent } from './containers/google-map-cont/google-map-cont.component';
import { GoogleMapPresComponent } from './presenters/google-map-pres/google-map-pres.component';

const apiKey = 'AIzaSyAVVJ9dsIF1kXP0mfqAfCWOg5oyB1cvRWs';

@NgModule({
  imports: [
    AgmCoreModule.forRoot({ apiKey }),
    CommonModule
  ],
  declarations: [ GoogleMapContComponent, GoogleMapPresComponent ],
  exports: [ GoogleMapContComponent ]
})
export class GoogleMapModule {}
