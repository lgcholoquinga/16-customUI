import { Routes } from '@angular/router';

export const routes: Routes = [
   {
      path: 'demo',
      loadChildren: () => import('./demo/demo.routes').then((route)=> route.DEMO_ROUTES)
   },
   {
      path: '',
      redirectTo: '/demo',
      pathMatch: 'full'
   }
];
