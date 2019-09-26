// Angular
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
// Layout
import { LayoutConfigService } from '../../../../../core/_base/layout';
// Charts
import { Chart } from 'chart.js/dist/Chart.min.js';

export interface WidgetCustomerParticipationSummaryChartOptions{
	labels:string[];
	dataset:any[];
	type:string;
	xAxes_Display:boolean;
	yAxes_Display:boolean;
}
@Component({
	selector: 'kt-widget-customer-participation-summary-chart',
	templateUrl: './WidgetCustomerParticipationSummaryChart.component.html',
})

export class WidgetCustomerParticipationSummaryChart implements OnInit {
	// Public properties
    @Input() options:WidgetCustomerParticipationSummaryChartOptions
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
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit():void {
		this.data={
            labels:this.options.labels,
            datasets:this.options.dataset,
        }
        this.initChartJS();
    }
    initChartJS() {
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
						display: this.options.xAxes_Display,
						gridLines: true,
						stacked: true,
						ticks: {
							display: true,
							fontColor: this.layoutConfigService.getConfig('colors.base.shape.3'),
							fontSize: 13,
							padding: 10,
							callback: function(value, index, values) {
								return String(value) + '%';
							},
						}
					}],
					yAxes: [{
						display: this.options.yAxes_Display,
						stacked: true,
						gridLines: true,
						ticks: {
							display: true,
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
