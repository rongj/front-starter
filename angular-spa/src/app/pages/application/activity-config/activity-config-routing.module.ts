import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityConfigComponent } from './activity-config.component';

const routes: Routes = [
	{
		path: '',
		component: ActivityConfigComponent
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityConfigRoutingModule { }
