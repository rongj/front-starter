import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';

interface TableColumn {
	title: string,
	dataIndex: string,
	render: object | undefined
}

@Component({
	selector: 'panel-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {

	@Input() title: string = '';

	@Input() toolbar: TemplateRef<void>;

	@Input() data: any[] = [];

	@Input() columns: Array<TableColumn> = [];


	// private _suffix: string | TemplateRef<void> = '';

	// @Input()
	// set ntoolbar(value: string | TemplateRef<void>) {
	// 	this._suffix = value;
	// }

	// get ntoolbar(): string | TemplateRef<void> {
	// 	return this._suffix;
	// }

	@Input()
	set render(d) {
		console.log(this.templateRef);
	}

	constructor() {}

	ngOnInit() {}

	ngAfterViewInit() {
	}

	test() {
		console.log('test');
	}

}
