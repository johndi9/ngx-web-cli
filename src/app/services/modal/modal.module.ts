import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalService } from './modal.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ ModalService ],
  declarations: []
})
export class ModalModule {}
