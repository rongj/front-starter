import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '@pages/login/login.service';
import { Menu } from '../models';


@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private loginService: LoginService
	) {}

	menuData: Menu[] = [];
	username: string = window.localStorage.getItem('USER_NAME') || '';
	isCollapsed: boolean = false;

	ngOnInit() {
		this.loginService.getLeftMenu().subscribe(res => {
			this.menuData = res.datalist;			
		})
	}

	handleMenuClick(e): void {
		console.log(e);
	}

	handleCollapse(): void {
		this.isCollapsed = !this.isCollapsed;
	}
}
