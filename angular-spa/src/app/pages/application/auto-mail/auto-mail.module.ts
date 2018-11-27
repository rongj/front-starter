import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { AutoMailComponent } from './auto-mail.component';
import { AutoMailRoutingModule } from './auto-mail-routing.module';
import { AutoMailService } from './auto-mail.service';

import { TableComponent } from '@components/table/table.component';

@NgModule({
	declarations: [
		TableComponent,
		AutoMailComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		NgZorroAntdModule,
		AutoMailRoutingModule
	],
	providers: [
		AutoMailService
	]
})
export class AutoMailModule {}
