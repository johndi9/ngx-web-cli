import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  exports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [],
})
export class SharedModule {}
