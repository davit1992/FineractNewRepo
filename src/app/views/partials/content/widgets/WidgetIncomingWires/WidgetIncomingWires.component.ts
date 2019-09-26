// Angular
import { Component, Input, OnInit } from '@angular/core';
// Lodash
import { shuffle } from 'lodash';

export interface WidgetIncomingWiresData {
	title: string;
	desc: string;
	value: string;
	valueClass?: string;
}

@Component({
	selector: 'kt-incoming-wires',
	templateUrl: './WidgetIncomingWires.component.html',
})
export class WidgetIncomingWires implements OnInit {
	// Public properties
	@Input() data: WidgetIncomingWiresData;

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit() {
		if (!this.data) {
			
		}
	}

}
