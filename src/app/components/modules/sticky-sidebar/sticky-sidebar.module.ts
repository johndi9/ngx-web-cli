import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StickySidebarContComponent } from './containers/sticky-sidebar-cont/sticky-sidebar-cont.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ StickySidebarContComponent ],
  exports: [ StickySidebarContComponent ]
})
export class StickySidebarModule {}
