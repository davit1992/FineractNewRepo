// Angular
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
// Layout
import { LayoutConfigService } from '../../../../../core/_base/layout';
// Charts
import { Chart } from 'chart.js/dist/Chart.min.js';

export interface WidgetInteractionVolumeOptions {
    labels: string[];
    dataset: any[];
    type: string;
}
@Component({
    selector: 'kt-interaction-volume-chart',
    templateUrl: './WidgetInteractionVolume.component.html',
})

export class WidgetInteractionVolume implements OnInit {
    // Public properties
    @Input() options: WidgetInteractionVolumeOptions
    private data: { labels: string[]; datasets: any[] };
    @ViewChild('chart', { static: true }) chart: ElementRef;

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
    ngOnInit(): void {
        this.data = {
            labels: this.options.labels,
            datasets: this.options.dataset,
        }
        this.initChartJS();
    }
    initChartJS() {
        const chart = new Chart(this.chart.nativeElement, {
            type: 'bar',
            data: this.data,
            options: {
                "hover": {
                    "animationDuration": 0
                },
                "animation": {
                    "duration": 1,
                    "onComplete": function () {
                        var chartInstance = this.chart,
                            ctx = chartInstance.ctx;

                        ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'bottom';

                        this.data.datasets.forEach(function (dataset, i) {
                            var meta = chartInstance.controller.getDatasetMeta(i);
                            meta.data.forEach(function (bar, index) {
                                var data = dataset.data[index]*1000;
                                ctx.fillText(data, bar._model.x, bar._model.y - 5);
                            });
                        });
                    }
                },
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
                            max: 400,
                            stepSize:100,
                            display: true,
                            beginAtZero: true,
                            callback: function(value, index, values) {
								return String(value) + 'K';
							},
                        }
                    }],
                    xAxes: [{
                        position:'top',
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
