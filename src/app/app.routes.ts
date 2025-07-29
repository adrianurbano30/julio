import { Counter } from './pages/counter/counter';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'', loadComponent: ()=>import('./pages/counter/counter').then(m => m.Counter)},
];
