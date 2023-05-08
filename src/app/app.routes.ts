import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadComponent: () => import('./home/home.component')},
  {path: 'feature', loadComponent: () => import('./feature/feature.component')},
];
