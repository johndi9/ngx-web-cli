import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', loadChildren: './components/pages/home/home.module#HomeModule' },
];
