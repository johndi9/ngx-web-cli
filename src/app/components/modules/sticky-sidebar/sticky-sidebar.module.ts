import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CvModule } from '../../../services/cv/cv.module';
import { ImageModule } from '../../elements/image/image.module';
import { SharedModule } from '../../shared/shared.module';
import { StickySidebarContComponent } from './containers/sticky-sidebar-cont/sticky-sidebar-cont.component';
import { StickySidebarPresComponent } from './presenters/sticky-sidebar-pres/sticky-sidebar-pres.component';
import { StickySidebarSmallPresComponent } from './presenters/sticky-sidebar-small-pres/sticky-sidebar-small-pres.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    CvModule,
    ImageModule
  ],
  declarations: [ StickySidebarContComponent, StickySidebarPresComponent, StickySidebarSmallPresComponent ],
  exports: [ StickySidebarContComponent ]
})
export class StickySidebarModule {}
