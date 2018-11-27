import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoMailComponent } from './auto-mail.component';

const routes: Routes = [
	{
		path: '',
		component: AutoMailComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AutoMailRoutingModule {}
