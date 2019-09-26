// Angular
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
// Layout
import { LayoutConfigService } from '../../../../../core/_base/layout';
// Charts
import { Chart } from 'chart.js/dist/Chart.min.js';

export interface WidgetWeeklyStrechedVolumeOptions {
    labels: string[];
    dataset: any[];
    type: string;
}
@Component({
    selector: 'kt-widget-weekly-streched-volume-chart',
    templateUrl: './WidgetWeeklyStrechedVolume.component.html',
})
export class WidgetWeeklyStrechedVolume implements OnInit {
    // Public properties
    @Input() options: WidgetWeeklyStrechedVolumeOptions;
    private data: { labels: string[]; datasets: any[] };
    @ViewChild('chart', { static: true }) chart: ElementRef;

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
    ngOnInit(): void {
        this.data = {
            labels: this.options.labels,
            datasets: this.options.dataset
        }
        this.initChartJS();
    }

    /** Init chart */
    initChartJS() {
        // For more information about the chartjs, visit this link
        // https://www.chartjs.org/docs/latest/getting-started/usage.html

        const chart = new Chart(this.chart.nativeElement, {
            type: 'bar',
            data: this.data,
            options: {
                legend: {
                    "display": false
                },
                tooltips: {
                    "enabled": true
                },
                scales: {
                    yAxes: [{
                        display: true,
                        gridLines: {
                            display: true,
                        },
                        ticks: {
                            padding: 10,
                            max: 100,
                            stepSize:50,
                            display: true,
                            beginAtZero: true,
                            callback: function(value, index, values) {
								return String(value) + '%';
							},
                        }
                    }],
                    xAxes: [{
                        position:'bottom',
                        display:true,
                        gridLines: {
                            display: true,
                        },
                        ticks: {
                            padding: 10,
                            autoSkip:true,
                            maxRotation:90,
                            minRotation:90,
                            beginAtZero: true
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
