import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityConfigComponent } from './activity-config.component';
import { ActivityConfigRoutingModule } from './activity-config-routing.module';

@NgModule({
	declarations: [
		ActivityConfigComponent
	],
	imports: [
		CommonModule,
		ActivityConfigRoutingModule
	]
})
export class ActivityConfigModule {}
