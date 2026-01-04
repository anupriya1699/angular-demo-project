import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { Home } from './home/home';
import { Index } from './index';

export const routes: Routes = [
  {
    path: '',
    component: Index,
    children: [
      {
        path: '',
        component: Home,
      },
      {
        path: 'spot-details/:id',
        canActivate: [AuthGuard],
        loadComponent: () => import('./spot-details/spot-details').then((m) => m.SpotDetails),
      },
      {
        path: 'dynamic-content',
        canActivate: [AuthGuard],
        loadComponent: () =>
          import('./dynamic-content/dynamic-content').then((m) => m.DynamicContent),
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login').then((m) => m.Login),
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup').then((m) => m.Signup),
  },
];
