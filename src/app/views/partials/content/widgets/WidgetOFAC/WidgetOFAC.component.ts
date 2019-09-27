// Angular
import { Component, Input, OnInit } from '@angular/core';
// Lodash
import { shuffle } from 'lodash';

export interface WidgetOFACData {
	title: string;
	desc: string;
	value: string;
	valueClass?: string;
}

@Component({
	selector: 'kt-ofac',
	templateUrl: './WidgetOFAC.component.html',
	styleUrls: ['./WidgetOFAC.component.scss'],
})
export class WidgetOFAC implements OnInit {
	// Public properties
	@Input() data: WidgetOFACData;

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit() {
	}

}
