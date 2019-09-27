// Angular
import { Component, Input, OnInit } from '@angular/core';
// Lodash
import { shuffle } from 'lodash';

export interface WidgetDepositsData {
	title: string;
	desc: string;
	value: string;
	valueClass?: string;
}

@Component({
	selector: 'kt-deposits',
	templateUrl: './WidgetDeposits.component.html',
	styleUrls: ['./WidgetDeposits.component.scss'],
})
export class WidgetDeposits implements OnInit {
	// Public properties
	@Input() data: WidgetDepositsData;

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit() {
	}

}
