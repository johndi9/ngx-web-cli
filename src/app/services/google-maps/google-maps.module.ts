import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsService } from './google-maps.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [GoogleMapsService],
  declarations: []
})
export class GoogleMapsModule { }
