// Angular
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
// Layout config
import { LayoutConfigService } from '../../../../../core/_base/layout';

/**
 * Sample components with sample data
 */
@Component({
  selector: 'kt-widget-hourly-chart',
  templateUrl: './WidgetTransactionVolumeHourly.component.html',
})
export class WidgetTransactionVolumeHourlyComponent implements OnInit {

  // Public properties
  // @Input() dataset: any[];
  // @Input() labels:string[];
  // @Input() type: string = 'pie';
  // @Input() fill: boolean = false;
  // @Input() dataset:any[];
  // @Input() labels:string[];
  // @Input() labelgroups:any[];

  @ViewChild('chart', { static: true }) chart: ElementRef;

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

    this.initChart();
  }

  private initChart() {
    // For more information about the chartjs, visit this link
    // https://www.chartjs.org/docs/latest/getting-started/usage.html


    const chart = new Chart(this.chart.nativeElement, {
      type: 'bar',
      data: {
        labels: ["January;2015", "February;2015", "March;2015", "January;2016", "February;2016", "March;2016"],
        datasets: [{
          label: '# of Votes',
          // xAxisID:'xAxis1',
          data: [12, 19, 3, 5, 2, 3]
        }]
      },
      options:{
        scales:{
          xAxes:[
            {
              // id:'xAxis1',
              position:'top',
              type:"category",
              // ticks:{
              //   callback:function(label){
              //     var month = label.split(";")[0];
              //     var year = label.split(";")[1];
              //     return month;
              //   }
              // }
            },
            {
              // id:'xAxis2',
              position:'bottom',
              type:"category",
              gridLines: {
                drawOnChartArea: false, // only want the grid lines for one axis to show up
              },
              // ticks:{
              //   callback:function(label){
              //     var month = label.split(";")[0];
              //     var year = label.split(";")[1];
              //     return year;
              //   }
              // }
            }],
          yAxes:[{
            ticks:{
              beginAtZero:true
            }
          }]
        }
      }
    });
  }
}
