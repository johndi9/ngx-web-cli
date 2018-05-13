import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/personal', pathMatch: 'full' },
  { path: 'personal', component: HomeComponent },
  { path: 'projects', component: HomeComponent },
  { path: 'projects/:id', component: HomeComponent },
  { path: 'employers', component: HomeComponent },
  { path: 'employers/:id', component: HomeComponent },
  { path: 'education', component: HomeComponent },
  { path: 'other', component: HomeComponent },
  { path: 'contact', component: HomeComponent }
];
