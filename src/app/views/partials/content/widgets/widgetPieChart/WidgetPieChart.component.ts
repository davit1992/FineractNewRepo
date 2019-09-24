// Angular
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
// Layout config
import { LayoutConfigService } from '../../../../../core/_base/layout';

export interface WidgetPipeChartOption{
    dataset: any[];
    labels:string[];
    type: string;
    fill: boolean;
}

/**
 * Sample components with sample data
 */
@Component({
	selector: 'kt-widget-pie-chart',
	templateUrl: './WidgetPieChart.component.html',
	styleUrls: ['./WidgetPieChart.component.scss']
})
export class WidgetPieChartComponent implements OnInit {

	// Public properties
    // @Input() dataset: any[];
    // @Input() labels:string[];
	// @Input() type: string = 'pie';
    // @Input() fill: boolean = false;
    @Input() options: WidgetPipeChartOption;

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

	private initChart() {
		// For more information about the chartjs, visit this link
		// https://www.chartjs.org/docs/latest/getting-started/usage.html

		const chart = new Chart(this.chart.nativeElement, {
			type: this.options.type,
			data: this.data,
			options: {
				responsive: true,
				title:{
                    display:false,
                    text:'Pie Chart'
                },
                legend:false,
                animation:{
                    animationScale:true,
                    animationRotate:true
                }
			}
		});
	}
}
