import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalModule } from '../../../services/modal/modal.module';
import { TabModule } from '../../../services/tab/tab.module';
import { CvModalModule } from '../../modules/cv-modal/cv-modal.module';
import { CvSliderModule } from '../../modules/cv-slider/cv-slider.module';
import { DynamicHeaderModule } from '../../modules/dynamic-header/dynamic-header.module';
import { FooterModule } from '../../modules/footer/footer.module';
import { StickySidebarModule } from '../../modules/sticky-sidebar/sticky-sidebar.module';
import { HomeComponent } from './home.component';
import { ROUTES } from './home.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    TabModule,
    ModalModule,
    DynamicHeaderModule,
    StickySidebarModule,
    CvSliderModule,
    CvModalModule,
    FooterModule
  ],
  declarations: [ HomeComponent ]
})
export class HomeModule {}
