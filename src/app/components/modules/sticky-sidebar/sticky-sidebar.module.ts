import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StickySidebarContComponent } from './containers/sticky-sidebar-cont/sticky-sidebar-cont.component';
import { StickySidebarPresComponent } from './presenters/sticky-sidebar-pres/sticky-sidebar-pres.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ StickySidebarContComponent, StickySidebarPresComponent ],
  exports: [ StickySidebarContComponent ]
})
export class StickySidebarModule {}
