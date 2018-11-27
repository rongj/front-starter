import { Injectable } from '@angular/core';

import { ApiService, AUTOMAIL_BASIC_URL } from '@utils/api.service';

import Qs from 'qs';

@Injectable()
export class AutoMailService {

	constructor(
		private apiService: ApiService,
	) {}

	// 获取权限
	getUserAuth(data) {
		return this.apiService.get('usercfgdata/getconfig', data)
	}

	// 获取报表表格说明信息
	getReportInfo(data) {
		return this.apiService.get('usercfgdata/gettableinfo', data)
	}

	// 1.1自动邮件登录
	login(data) {
		return this.apiService.get(AUTOMAIL_BASIC_URL + 'login/in', data)
	}

	// 1.1配置列表
	getConfigList(data) {
		return this.apiService.get(AUTOMAIL_BASIC_URL + 'autoemailtooldata/cfglist', data)
	}

	// 1.2 新增配置
	addConfig(data) {
		return this.apiService.post(AUTOMAIL_BASIC_URL + 'autoemailtooldata/addcfg',  data)
	}

	// 1.3查看配置
	getConfig(data) {
		return this.apiService.get(AUTOMAIL_BASIC_URL + 'autoemailtooldata/getcfgrunlog', data)
	}

	// 1.4修改配置
	updateConfig(data) {
		return this.apiService.post(AUTOMAIL_BASIC_URL + 'autoemailtooldata/updatecfg', data)
	}

	// 1.5 任务执行日志列表
	getMailList(data) {
		return this.apiService.get(AUTOMAIL_BASIC_URL + 'autoemailtooldata/cfgloglist', data)
	}

	// 1.6 钉钉用户邮件地址
	getUserList(data) {
		return this.apiService.get(AUTOMAIL_BASIC_URL + 'usermanagerdata/getdduserlist', data)
	}

	// 1.7 可选数据源下拉框
	getDbList(data) {
		return this.apiService.get(AUTOMAIL_BASIC_URL + 'autoemailtooldata/getdbsource', data)
	}

	// 1.8运行非定时任务
	runStaticTask(data) {
		return this.apiService.get(AUTOMAIL_BASIC_URL + 'autoemailtooldata/runstatictask', data)
	}

	// 1.9更新定时任务时间
	updateTaskTime(data) {
		return this.apiService.get(AUTOMAIL_BASIC_URL + 'autoemailtooldata/updatetasktime', data)
	}

	// 1.10暂停定时任务
	pauseCfgTask(data) {
		return this.apiService.get(AUTOMAIL_BASIC_URL + 'autoemailtooldata/pausecfgtask', data)
	}

	// 1.11恢复定时任务
	resumeCfgTask(data) {
		return this.apiService.get(AUTOMAIL_BASIC_URL + 'autoemailtooldata/resumecfgtask', data)
	}

	// 1.12 删除定时任务
	deleteCfgTask(data) {
		return this.apiService.get(AUTOMAIL_BASIC_URL + 'autoemailtooldata/deletecfgtask', data)
	}

	// 1.13 任务执行概况
	getAllTask(data) {
		return this.apiService.get(AUTOMAIL_BASIC_URL + 'autoemailtooldata/taskoverview', data)
	}

	// 1.14 下载附件
	downloadUrl(data) {
		return AUTOMAIL_BASIC_URL + 'autoemailtooldata/download?' + Qs.stringify(data)
	}

	// 1.15 重新发送邮件
	retrySendEmail(data) {
		return this.apiService.get(AUTOMAIL_BASIC_URL + 'autoemailtooldata/retrysendemail', data)
	}

	// 1.16 启用/禁用 配置
	updateFlag(data) {
		return this.apiService.get(AUTOMAIL_BASIC_URL + 'autoemailtooldata/updateflag', data)
	}

	// 1.17 等待任务列表
	getWaitingList(data) {
		return this.apiService.get(AUTOMAIL_BASIC_URL + 'autoemailtooldata/waitinglist', data)
	}
	
	// 1.18下载hive运行日志
	downloadLogUrl(data) {
		return AUTOMAIL_BASIC_URL + 'autoemailtooldata/downloadrunlog?' + Qs.stringify(data)
	}
}
