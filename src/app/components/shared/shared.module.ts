import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TranslateModule } from '@ngx-translate/core';
import { ImageModule } from '../elements/image/image.module';

@NgModule({
  exports: [
    CommonModule,
    TranslateModule,
    ImageModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatChipsModule,
  ],
  declarations: [],
})
export class SharedModule {}
