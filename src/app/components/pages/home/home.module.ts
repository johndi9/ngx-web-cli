import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicHeaderModule } from '../../modules/dynamic-header/dynamic-header.module';
import { HomeComponent } from './home.component';
import { ROUTES } from './home.routes';

@NgModule({
  imports: [
    CommonModule,
    DynamicHeaderModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [ HomeComponent ]
})
export class HomeModule {}
