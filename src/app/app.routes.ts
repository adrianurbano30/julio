
import { Home } from './pages/home/home';

import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'', loadComponent: ()=>import('./pages/home/home').then(m => m.Home)},
  {path:'counter',loadComponent:()=>import('./pages/counter/counter').then(m=>m.Counter)},
  {path:'hero',loadComponent:()=>import('./pages/hero/hero').then(m=>m.Hero)},
  {path:'dragonball',loadComponent:()=>import('./pages/dragonball/dragonball').then(m=>m.Dragonball)},
  {path:'**',redirectTo:''}
];
