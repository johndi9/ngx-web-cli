import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CvModule } from '../../../services/cv/cv.module';
import { SharedModule } from '../../shared/shared.module';
import { StickySidebarContComponent } from './containers/sticky-sidebar-cont/sticky-sidebar-cont.component';
import { StickySidebarPresComponent } from './presenters/sticky-sidebar-pres/sticky-sidebar-pres.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    CvModule,
  ],
  declarations: [ StickySidebarContComponent, StickySidebarPresComponent ],
  exports: [ StickySidebarContComponent ]
})
export class StickySidebarModule {}
