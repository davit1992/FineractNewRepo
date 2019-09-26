// Angular
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
// Layout
import { LayoutConfigService } from '../../../../../core/_base/layout';
// Charts
import { Chart } from 'chart.js/dist/Chart.min.js';

export interface Widget14Options{
	labels:string[];
	dataset:any[];
	type:string;
	xAxes_Display:boolean;
	yAxes_Display:boolean;
	xAxesTicksCallbackValue:string;
	yAxesTicksCallbackValue:string;
	xAxesPosition:string;
	yAxesPosition:string;
}
@Component({
	selector: 'kt-widget14',
	templateUrl: './widget14.component.html',
	styleUrls: ['./widget14.component.scss'],
})
export class Widget14Component implements OnInit {
	// Public properties
	@Input() options:Widget14Options;
	@Input() title: string;
	@Input() desc: string;
	private data: { labels: string[]; datasets: any[] };
	@ViewChild('chart', {static: true}) chart: ElementRef;

	/**
	 * Component constructor
	 *
	 * @param layoutConfigService: LayoutConfigService
	 */
	constructor(private layoutConfigService: LayoutConfigService) {
		console.log('constractor');
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit():void {
	

		if (!this.options || this.options === undefined) {
			this.options.type='bar';
			this.options.xAxes_Display=false;
			this.options.yAxes_Display=false;
			this.data = {
				labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6', 'Label 7', 'Label 8', 'Label 9', 'Label 10', 'Label 11', 'Label 12', 'Label 13', 'Label 14', 'Label 15', 'Label 16'],
				datasets: [
					{
						// label: 'dataset 1',
						backgroundColor: this.layoutConfigService.getConfig('colors.state.success'),
						data: [
							15, 20, 25, 30, 25, 20, 15, 20, 25, 30, 25, 20, 15, 10, 15, 20
						]
					}, {
						// label: 'dataset 2',
						backgroundColor: '#f3f3fb',
						data: [
							15, 20, 25, 30, 25, 20, 15, 20, 25, 30, 25, 20, 15, 10, 15, 20
						]
					}
				]
			};
		}else{
			this.data = {
				labels:this.options.labels,
				datasets:this.options.dataset
			}
		}
		this.initChartJS();
	}

	/** Init chart */
	initChartJS() {
		// For more information about the chartjs, visit this link
		// https://www.chartjs.org/docs/latest/getting-started/usage.html

		const chart = new Chart(this.chart.nativeElement, {
			type: this.options.type,
			data: this.data,
			options: {
				title: {
					display: false,
				},
				tooltips: {
					intersect: false,
					mode: 'nearest',
					xPadding: 10,
					yPadding: 10,
					caretPadding: 10
				},
				legend: {
					display: false
				},
				responsive: true,
				maintainAspectRatio: false,
				barRadius: 4,
				scales: {
					xAxes: [{
						position:this.options.xAxesPosition,
						display: this.options.xAxes_Display,
						gridLines: true,
						stacked: true,
						ticks: {
							display: true,
							fontColor: this.layoutConfigService.getConfig('colors.base.shape.3'),
							fontSize: 13,
							padding: 10,
							// callback: function(value, index, values) {
							// 	return String(value) + this.xAxesValue;
							// },
						}
					}],
					yAxes: [{
						position:this.options.yAxesPosition,
						display: this.options.yAxes_Display,
						stacked: true,
						gridLines: true,
						ticks: {
							callback: function(value, index, values) {
								return String(value) + 'K';
							},

							display: true,
							// min: 0,
							// stepSize:10,
							// max:40,
							fontColor: this.layoutConfigService.getConfig('colors.base.shape.3'),
							fontSize: 13,
							padding: 10
						}
					}]
				},
				layout: {
					padding: {
						left: 0,
						right: 0,
						top: 0,
						bottom: 0
					}
				}
			}
		});
	}
}
