import { Component, OnInit, ViewChild } from '@angular/core';

import { AutoMailService } from './auto-mail.service';

import { TableComponent } from '@components/table/table.component';

@Component({
	selector: 'app-auto-mail',
	templateUrl: './auto-mail.component.html',
	styleUrls: ['./auto-mail.component.scss']
})
export class AutoMailComponent implements OnInit {
	@ViewChild(TableComponent) private tc: TableComponent;

	constructor(
		private autoMailService: AutoMailService
	) {}

	mailList: any[] = [];
	mail_status: string = '1';

	columns: any[] = [
		{
			title: '邮件标题',
			dataIndex: 'mail_subject',
		},
		{
			title: '计划执行时间',
			dataIndex: 'timing_send_rate',
		},
		{
			title: '当前任务状态',
			dataIndex: 'send_status',
		},
		{
			title: '任务类型',
			dataIndex: 'hive_mysql_flag',
		},
		{
			title: '创建者',
			dataIndex: 'create_author',
		},
		{
			title: '更新时间',
			dataIndex: 'modifytime',
		},
		{
			title: '操作',
			dataIndex: 'action',
			render: record => {
				return `<a href="">132</a>`
			}
		},
	]

	calc(x:number): string {
		return x + ''
	}

	ngOnInit() {
		this.tc.test()
		this.autoMailService.getConfigList({}).subscribe(res => {
			this.mailList = res.datalist || [];
		})
	}

}
