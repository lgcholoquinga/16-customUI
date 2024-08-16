import { Routes } from '@angular/router';

export const DEMO_ROUTES: Routes = [
	{
		path: '',
		title: 'Demo',
		loadComponent: () => import('./demo.component'),
		children: [
			{
				path: 'controls',
				title: 'Controls',
				loadComponent: () => import('./pages/controls/controls.component'),
			},
			{
				path: 'templates',
				title: 'Template',
				loadComponent: () => import('./pages/templates/templates.component'),
			},
			{
				path: '',
				redirectTo: 'controls',
				pathMatch: 'full',
			},
		],
	},
];
