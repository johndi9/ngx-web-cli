import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabService } from './tab.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ TabService ],
  declarations: []
})
export class TabModule {}
