// Angular
import { Component, Input, OnInit } from '@angular/core';
// Lodash
import { shuffle } from 'lodash';

export interface WidgetNewAccountsData {
	title: string;
	desc: string;
	value: string;
	valueClass?: string;
}

@Component({
	selector: 'kt-new-accounts',
	templateUrl: './WidgetNewAccounts.component.html',
	styleUrls: ['./WidgetNewAccounts.component.scss'],
})
export class WidgetNewAccounts implements OnInit {
	// Public properties
	@Input() data: WidgetNewAccountsData;

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit() {
	}

}
