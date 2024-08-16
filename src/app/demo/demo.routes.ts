import { Routes } from "@angular/router";

export const DEMO_ROUTES: Routes = [
   {
      path: '',
      title: 'Demo',
      loadComponent: () => import('./demo.component'),
      children: [
         {
            path: 'controls',
            title: 'Controls',
            loadComponent: () => import('./pages/controls/controls.component')
         },
         {
            path: 'directives',
            title: 'Directives',
            loadComponent: () => import('./pages/structural-directive/structural-directive.component')
         },
         {
            path: '',
            redirectTo: 'controls',
            pathMatch: 'full'
         }
      ]
   }
];