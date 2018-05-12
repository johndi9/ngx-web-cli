import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
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
    MatCardModule,
    MatDialogModule,
  ],
  declarations: [],
})
export class SharedModule {}
