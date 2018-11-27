import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
	{
		path: 'login',
		loadChildren: './pages/login/login.module#LoginModule'
	},
	{
		path: '',
		component: LayoutComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: '',
				redirectTo: '/index',
				pathMatch: 'full'
			},
			{
				path: 'index',
				loadChildren: './pages/index/index.module#IndexModule'
			},
			{
				path: 'application/activity-config',
				loadChildren: './pages/application/activity-config/activity-config.module#ActivityConfigModule'
			},
			{
				path: 'application/auto-mail',
				loadChildren: './pages/application/auto-mail/auto-mail.module#AutoMailModule'
			},
			{
				path: 'application/management',
				loadChildren: './pages/application/management/management.module#ManagementModule'
			},
		]
	},
	{
		path: '**',
		redirectTo: '/index'
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			useHash: true,
			// preloadingStrategy: PreloadAllModules
		})
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}
