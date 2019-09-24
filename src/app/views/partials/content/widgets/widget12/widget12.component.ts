// Angular
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
// Layout config
import { LayoutConfigService } from '../../../../../core/_base/layout';

export interface Widget12Options{
	ShowContent: boolean;
	dataset:any[];
	type:string;
	fill:boolean;
	labels:string[];
	yAxes_min:number;
	yAxes_max:number;
	yAxes_stepSize:number;
	xAxes_position:string;
	yAxes_position:string;
}
/**
 * Sample components with sample data
 */
@Component({
	selector: 'kt-widget12',
	templateUrl: './widget12.component.html',
	styleUrls: ['./widget12.component.scss']
})
export class Widget12Component implements OnInit {

	// Public properties
	@Input() options: Widget12Options;
	// @Input() ShowContent: boolean = true;
	private data: { labels: string[], datasets: any[] };
	// @Input() type: string = 'line';
	// @Input() fill: boolean = false;
	@ViewChild('chart', {static: true}) chart: ElementRef;

	/**
	 * Component constructor
	 * @param layoutConfigService
	 */
	constructor(private layoutConfigService: LayoutConfigService) {
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit(): void {
		if (!this.options) {
			const color = Chart.helpers.color;
			this.options.type = 'line';
			this.options.yAxes_max = 3;
			this.options.yAxes_min = 0;
			this.options.yAxes_stepSize = 1;
			this.options.xAxes_position='bottom';
			this.options.yAxes_position = 'left';
			this.data = {
				labels: ['Feb 3', 'Feb 8', 'Feb 13', 'Feb 18', 'Feb 23', 'Feb 28', 'Mar 5', 'Mar 10', 'Mar 15', 'Mar 20', 'Mar 25', 'Mar 30', 'Apr 4'],
				datasets: [
					{
						fill: false,
						// borderWidth: 0,
						backgroundColor: color(this.layoutConfigService.getConfig('colors.state.brand')).alpha(0.6).rgbString(),
						// borderColor: color(this.layoutConfigService.getConfig('colors.state.brand')).alpha(0).rgbString(),
						borderColor:'red',

						pointHoverRadius: 4,
						pointHoverBorderWidth: 12,
						pointBackgroundColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
						pointBorderColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
						pointHoverBackgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
						pointHoverBorderColor: Chart.helpers.color('#000000').alpha(0.1).rgbString(),

						data: [0, 1, 2, 3, 3,2,1,2,2,1,3,0,2]
					},
					{
						fill: false,
						// borderWidth: 0,
						backgroundColor: color(this.layoutConfigService.getConfig('colors.state.brand')).alpha(0.2).rgbString(),
						// borderColor: color(this.layoutConfigService.getConfig('colors.state.brand')).alpha(0).rgbString(),
						borderColor:'green',

						pointHoverRadius: 4,
						pointHoverBorderWidth: 12,
						pointBackgroundColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
						pointBorderColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
						pointHoverBackgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
						pointHoverBorderColor: Chart.helpers.color('#000000').alpha(0.1).rgbString(),

						data: [2,1,2,3, 2,1,2,3, 2,1,2,3, 0]
					}
				]
			};
		}else{
			this.data = {
				labels:this.options.labels,
				datasets:this.options.dataset
			}
		}
		this.initChart();
	}

	private initChart() {
		// For more information about the chartjs, visit this link
		// https://www.chartjs.org/docs/latest/getting-started/usage.html

		const chart = new Chart(this.chart.nativeElement, {
			type: this.options.type,
			data: this.data,
			options: {
				responsive: true,
				maintainAspectRatio: false,
				legend: false,
				scales: {
					xAxes: [{
						position:this.options.xAxes_position,
						categoryPercentage: 0.35,
						barPercentage: 0.70,
						display: true,
						scaleLabel: {
							display: false,
							labelString: 'Month'
						},
						gridLines: false,
						ticks: {
							display: true,
							beginAtZero: true,
							fontColor: this.layoutConfigService.getConfig('colors.base.shape.3'),
							fontSize: 13,
							padding: 10
						}
					}],
					yAxes: [{
						position:this.options.yAxes_position,
						categoryPercentage: 0.35,
						barPercentage: 0.70,
						display: true,
						scaleLabel: {
							display: false,
							labelString: 'Value'
						},
						gridLines: {
							color: this.layoutConfigService.getConfig('colors.base.shape.2'),
							drawBorder: false,
							offsetGridLines: false,
							drawTicks: false,
							borderDash: [3, 4],
							zeroLineWidth: 1,
							zeroLineColor: this.layoutConfigService.getConfig('colors.base.shape.2'),
							zeroLineBorderDash: [3, 4]
						},
						ticks: {
							callback: function(value, index, values) {
								return value + "M";
							},
							max: this.options.yAxes_max,
							stepSize: this.options.yAxes_stepSize,
							display: true,
							min: this.options.yAxes_min,
							fontColor: this.layoutConfigService.getConfig('colors.base.shape.3'),
							fontSize: 13,
							padding: 10
						}
					}]
				},
				title: {
					display: false
				},
				hover: {
					mode: 'index'
				},
				tooltips: {
					enabled: true,
					intersect: false,
					mode: 'nearest',
					bodySpacing: 5,
					yPadding: 10,
					xPadding: 10,
					caretPadding: 0,
					displayColors: false,
					backgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
					titleFontColor: '#ffffff',
					cornerRadius: 4,
					footerSpacing: 0,
					titleSpacing: 0
				},
				layout: {
					padding: {
						left: 0,
						right: 0,
						top: 5,
						bottom: 5
					}
				}
			}
		});
	}
}
