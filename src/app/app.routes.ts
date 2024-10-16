import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';

export const routes: Routes = [
  {
    path: 'first-component',
    component: FirstComponent,
  },
  {
    path: 'second-component',
    loadComponent: () => import('./second/second.component').then(c => c.SecondComponent),
  },
];
