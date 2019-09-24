// Angular
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
// Layout config
import { LayoutConfigService } from '../../../../../core/_base/layout';

export interface WidgetBarChartOption{
    dataset: any[];
    labels:string[];
    type: string;
    xAxes_display:boolean;
    yAxes_display:boolean;
}

/**
 * Sample components with sample data
 */
@Component({
	selector: 'kt-widget-bar-chart',
	templateUrl: './WidgetBarChart.component.html',
	styleUrls: ['./WidgetBarChart.component.scss']
})
export class WidgetBarChartComponent implements OnInit {

	// Public properties
    // @Input() dataset: any[];
    // @Input() labels:string[];
	// @Input() type: string = 'pie';
    // @Input() fill: boolean = false;
    @Input() options: WidgetBarChartOption;

	@ViewChild('chart', {static: true}) chart: ElementRef;

    private data:{labels:string[], datasets:any[]};
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
        this.data = {
            labels:this.options.labels,
            datasets:this.options.dataset
        }
		this.initChart();
	}

	/** Init chart */
	initChart() {
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
						display: this.options.xAxes_display,
						gridLines: false,
						stacked: true
					}],
					yAxes: [{
						display:  this.options.yAxes_display,
						stacked: true,
						gridLines: false
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
