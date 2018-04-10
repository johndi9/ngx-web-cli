import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  exports: [
    CommonModule,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
  declarations: [],
})
export class SharedModule {}
