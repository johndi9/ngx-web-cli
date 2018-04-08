import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CvModule } from '../../../services/cv/cv.module';
import { DynamicHeaderModule } from '../../modules/dynamic-header/dynamic-header.module';
import { HomeComponent } from './home.component';
import { ROUTES } from './home.routes';

@NgModule({
  imports: [
    CommonModule,
    DynamicHeaderModule,
    RouterModule.forChild(ROUTES),
    CvModule,
  ],
  declarations: [ HomeComponent ]
})
export class HomeModule {}
