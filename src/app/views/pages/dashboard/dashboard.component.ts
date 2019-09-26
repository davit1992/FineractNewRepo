// Angular
import { Component, OnInit } from '@angular/core';
// Lodash
import { shuffle } from 'lodash';
// Services
// Widgets model
import { LayoutConfigService, SparklineChartOptions } from '../../../core/_base/layout';
import { Widget4Data } from '../../partials/content/widgets/widget4/widget4.component';
import { WidgetPipeChartOption } from '../../partials/content/widgets/widgetPieChart/WidgetPieChart.component';
import { Widget12Options } from '../../partials/content/widgets/widget12/widget12.component';
import { WidgetBarChartOption } from '../../partials/content/widgets/widgetBarChart/WidgetBarChart.component';
import { Widget14Options } from '../../partials/content/widgets/widget14/widget14.component';
import { WidgetCustomerParticipationSummaryChartOptions } from '../../partials/content/widgets/WidgetCustomerParticipationSummaryChart/WidgetCustomerParticipationSummaryChart.component';
import { WidgetInteractionVolumeOptions } from '../../partials/content/widgets/WidgetInteractionVolume/WidgetInteractionVolume.component';
import { WidgetWeeklyStrechedVolumeOptions } from '../../partials/content/widgets/WidgetWeeklyStrechedVolume/WidgetWeeklyStrechedVolume.component';
import { WidgetInteractionValueOptions } from '../../partials/content/widgets/WidgetInteractionValue/WidgetInteractionValue.component';

@Component({
	selector: 'kt-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

	chartOptions1: SparklineChartOptions;
	chartOptions2: SparklineChartOptions;
	chartOptions3: SparklineChartOptions;
	chartOptions4: SparklineChartOptions;
	widget4_1: Widget4Data;
	widget4_2: Widget4Data;
	widget4_3: Widget4Data;
	widget4_4: Widget4Data;

	pieChartOptions1: WidgetPipeChartOption;
	pieChartOptions2: WidgetPipeChartOption;
	chart12Options1: Widget12Options;
	chart12Options2: Widget12Options;

	widget14Optins1: Widget14Options;
	widget14Optins2: Widget14Options;
	widget14Optins3: Widget14Options;
	widget14Optins4: Widget14Options;
	widget14Optins5: Widget14Options;

	widgetCusomerSummaryOptins1: WidgetCustomerParticipationSummaryChartOptions;
	widgetCusomerSummaryOptins2: WidgetCustomerParticipationSummaryChartOptions;
	widgetCusomerSummaryOptins3: WidgetCustomerParticipationSummaryChartOptions;

	interactionVolumeOptions:WidgetInteractionVolumeOptions;


	widgetWeeklyStrechedVolumeOptions: WidgetWeeklyStrechedVolumeOptions;

	interactiveValueOptions:WidgetInteractionValueOptions;

	constructor(private layoutConfigService: LayoutConfigService, ) {
	}

	ngOnInit(): void {

		const color = Chart.helpers.color;

		this.chartOptions1 = {
			data: [10, 14, 18, 11, 9, 12, 14, 17, 18, 14],
			color: this.layoutConfigService.getConfig('colors.state.brand'),
			border: 3
		};
		this.chartOptions2 = {
			data: [11, 12, 18, 13, 11, 12, 15, 13, 19, 15],
			color: this.layoutConfigService.getConfig('colors.state.danger'),
			border: 3
		};
		this.chartOptions3 = {
			data: [12, 12, 18, 11, 15, 12, 13, 16, 11, 18],
			color: this.layoutConfigService.getConfig('colors.state.success'),
			border: 3
		};
		this.chartOptions4 = {
			data: [11, 9, 13, 18, 13, 15, 14, 13, 18, 15],
			color: this.layoutConfigService.getConfig('colors.state.primary'),
			border: 3
		};




		// @ts-ignore
		this.widget4_1 = shuffle([
			{
				pic: './assets/media/files/doc.svg',
				title: 'Metronic Documentation',
				url: 'https://keenthemes.com.my/metronic',
			}, {
				pic: './assets/media/files/jpg.svg',
				title: 'Project Launch Evgent',
				url: 'https://keenthemes.com.my/metronic',
			}, {
				pic: './assets/media/files/pdf.svg',
				title: 'Full Developer Manual For 4.7',
				url: 'https://keenthemes.com.my/metronic',
			}, {
				pic: './assets/media/files/javascript.svg',
				title: 'Make JS Development',
				url: 'https://keenthemes.com.my/metronic',
			}, {
				pic: './assets/media/files/zip.svg',
				title: 'Download Ziped version OF 5.0',
				url: 'https://keenthemes.com.my/metronic',
			}, {
				pic: './assets/media/files/pdf.svg',
				title: 'Finance Report 2016/2017',
				url: 'https://keenthemes.com.my/metronic',
			},
		]);
		// @ts-ignore
		this.widget4_2 = shuffle([
			{
				pic: './assets/media/users/100_4.jpg',
				username: 'Anna Strong',
				desc: 'Visual Designer,Google Inc.',
				url: 'https://keenthemes.com.my/metronic',
				buttonClass: 'btn-label-brand'
			}, {
				pic: './assets/media/users/100_14.jpg',
				username: 'Milano Esco',
				desc: 'Product Designer, Apple Inc.',
				url: 'https://keenthemes.com.my/metronic',
				buttonClass: 'btn-label-warning'
			}, {
				pic: './assets/media/users/100_11.jpg',
				username: 'Nick Bold',
				desc: 'Web Developer, Facebook Inc.',
				url: 'https://keenthemes.com.my/metronic',
				buttonClass: 'btn-label-danger'
			}, {
				pic: './assets/media/users/100_1.jpg',
				username: 'Wilter Delton',
				desc: 'Project Manager, Amazon Inc.',
				url: 'https://keenthemes.com.my/metronic',
				buttonClass: 'btn-label-success'
			}, {
				pic: './assets/media/users/100_5.jpg',
				username: 'Nick Stone',
				desc: 'Visual Designer, Github Inc.',
				url: 'https://keenthemes.com.my/metronic',
				buttonClass: 'btn-label-dark'
			},
		]);
		// @ts-ignore
		this.widget4_3 = shuffle([
			{
				icon: 'flaticon-pie-chart-1 kt-font-info',
				title: 'Metronic v6 has been arrived!',
				url: 'https://keenthemes.com.my/metronic',
				value: '+$500',
				valueColor: 'kt-font-info'
			}, {
				icon: 'flaticon-safe-shield-protection kt-font-success',
				title: 'Metronic community meet-up 2019 in Rome.',
				url: 'https://keenthemes.com.my/metronic',
				value: '+$1260',
				valueColor: 'kt-font-success'
			}, {
				icon: 'flaticon2-line-chart kt-font-danger',
				title: 'Metronic Angular 8 version will be landing soon..',
				url: 'https://keenthemes.com.my/metronic',
				value: '+$1080',
				valueColor: 'kt-font-danger'
			}, {
				icon: 'flaticon2-pie-chart-1 kt-font-primary',
				title: 'ale! Purchase Metronic at 70% off for limited time',
				url: 'https://keenthemes.com.my/metronic',
				value: '70% Off!',
				valueColor: 'kt-font-primary'
			}, {
				icon: 'flaticon2-rocket kt-font-brand',
				title: 'Metronic VueJS version is in progress. Stay tuned!',
				url: 'https://keenthemes.com.my/metronic',
				value: '+134',
				valueColor: 'kt-font-brand'
			}, {
				icon: 'flaticon2-notification kt-font-warning',
				title: 'Black Friday! Purchase Metronic at ever lowest 90% off for limited time',
				url: 'https://keenthemes.com.my/metronic',
				value: '70% Off!',
				valueColor: 'kt-font-warning'
			}, {
				icon: 'flaticon2-file kt-font-focus',
				title: 'Metronic React version is in progress.',
				url: 'https://keenthemes.com.my/metronic',
				value: '+13%',
				valueColor: 'kt-font-focus'
			},
		]);
		// @ts-ignore
		this.widget4_4 = shuffle([
			{
				pic: './assets/media/client-logos/logo5.png',
				title: 'Trump Themes',
				desc: 'Make Metronic Development',
				url: 'https://keenthemes.com.my/metronic',
				value: '+$2500',
				valueColor: 'kt-font-brand'
			}, {
				pic: './assets/media/client-logos/logo4.png',
				title: 'StarBucks',
				desc: 'Good Coffee & Snacks',
				url: 'https://keenthemes.com.my/metronic',
				value: '-$290',
				valueColor: 'kt-font-brand'
			}, {
				pic: './assets/media/client-logos/logo3.png',
				title: 'Phyton',
				desc: 'A Programming Language',
				url: 'https://keenthemes.com.my/metronic',
				value: '+$17',
				valueColor: 'kt-font-brand'
			}, {
				pic: './assets/media/client-logos/logo2.png',
				title: 'GreenMakers',
				desc: 'Make Green Development',
				url: 'https://keenthemes.com.my/metronic',
				value: '-$2.50',
				valueColor: 'kt-font-brand'
			}, {
				pic: './assets/media/client-logos/logo1.png',
				title: 'FlyThemes',
				desc: 'A Let\'s Fly Fast Again Language',
				url: 'https://keenthemes.com.my/metronic',
				value: '+200',
				valueColor: 'kt-font-brand'
			},
		]);

		this.pieChartOptions1 = {
			dataset: [{
				data: [35.15, 64.58],
				backgroundColor: ["teal", "green"],
				label: 'Dataset 1'
			}],
			labels: ['Mobile', 'Online'],
			type: 'pie',
			fill: false,
		};
		this.pieChartOptions2 = {
			dataset: [{
				data: [33.13, 66.87],
				backgroundColor: ["teal", "green"],
				label: 'Dataset 1'
			}],
			labels: ['Mobile', 'Online'],
			type: 'pie',
			fill: false,
		};
		this.chart12Options1 = {
			ShowContent: false,
			yAxes_max: 3,
			yAxes_min: 0,
			yAxes_stepSize: 1,
			xAxes_position: 'bottom',
			yAxes_position: 'left',
			type: 'line',
			labels: ['Feb 3', 'Feb 8', 'Feb 13', 'Feb 18', 'Feb 23', 'Feb 28', 'Mar 5', 'Mar 10', 'Mar 15', 'Mar 20', 'Mar 25', 'Mar 30', 'Apr 4'],
			fill: false,
			dataset: [
				{
					fill: false,
					// borderWidth: 0,
					backgroundColor: color(this.layoutConfigService.getConfig('colors.state.brand')).alpha(0.6).rgbString(),
					// borderColor: color(this.layoutConfigService.getConfig('colors.state.brand')).alpha(0).rgbString(),
					borderColor: 'red',

					pointHoverRadius: 4,
					pointHoverBorderWidth: 12,
					pointBackgroundColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
					pointBorderColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
					pointHoverBackgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
					pointHoverBorderColor: Chart.helpers.color('#000000').alpha(0.1).rgbString(),

					data: [0, 1, 2, 3, 3, 2, 1, 2, 2, 1, 3, 0, 2]
				},
				{
					fill: false,
					// borderWidth: 0,
					backgroundColor: color(this.layoutConfigService.getConfig('colors.state.brand')).alpha(0.2).rgbString(),
					// borderColor: color(this.layoutConfigService.getConfig('colors.state.brand')).alpha(0).rgbString(),
					borderColor: 'green',

					pointHoverRadius: 4,
					pointHoverBorderWidth: 12,
					pointBackgroundColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
					pointBorderColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
					pointHoverBackgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
					pointHoverBorderColor: Chart.helpers.color('#000000').alpha(0.1).rgbString(),

					data: [2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 0]
				}]
		};

		this.chart12Options2 = {
			ShowContent: false,
			yAxes_max: 4000000,
			yAxes_min: -1000000,
			yAxes_stepSize: 1000000,
			xAxes_position: 'bottom',
			yAxes_position: 'left',
			type: 'line',
			labels: ['Feb 3', 'Feb 8', 'Feb 13', 'Feb 18', 'Feb 23', 'Feb 28', 'Mar 5', 'Mar 10', 'Mar 15', 'Mar 20', 'Mar 25', 'Mar 30', 'Apr 4'],
			fill: false,
			dataset: [
				{
					fill: false,
					// borderWidth: 0,
					backgroundColor: color(this.layoutConfigService.getConfig('colors.state.brand')).alpha(0.6).rgbString(),
					// borderColor: color(this.layoutConfigService.getConfig('colors.state.brand')).alpha(0).rgbString(),
					borderColor: 'red',

					pointHoverRadius: 4,
					pointHoverBorderWidth: 12,
					pointBackgroundColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
					pointBorderColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
					pointHoverBackgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
					pointHoverBorderColor: Chart.helpers.color('#000000').alpha(0.1).rgbString(),

					data: [600000, 1000000, 4000000, 2500000, 4000000, 4000000, 3500000, 1200000, 3000000, 3000000, 1000000, 1250000, 4000000]
				},
				{
					fill: false,
					// borderWidth: 0,
					backgroundColor: color(this.layoutConfigService.getConfig('colors.state.brand')).alpha(0.2).rgbString(),
					// borderColor: color(this.layoutConfigService.getConfig('colors.state.brand')).alpha(0).rgbString(),
					borderColor: 'green',

					pointHoverRadius: 4,
					pointHoverBorderWidth: 12,
					pointBackgroundColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
					pointBorderColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
					pointHoverBackgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
					pointHoverBorderColor: Chart.helpers.color('#000000').alpha(0.1).rgbString(),

					data: [200000, 4000000, 3000000, 2500000, 3000000, 2000000, 2500000, 1600000, 1000000, 3500000, 1000000, 1250000, 2000000]
				}]
		};

		this.widget14Optins4 = {
			type: 'bar',
			xAxes_Display: true,
			yAxes_Display: true,
			labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
			xAxesTicksCallbackValue: "",
			yAxesTicksCallbackValue: "K",
			xAxesPosition: 'top',
			yAxesPosition: 'left',
			dataset: [{
				backgroundColor: this.layoutConfigService.getConfig('colors.state.primary'),
				data: [
					11, 15, 40, 30, 10, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23
				]
			}]
		};
		this.widgetCusomerSummaryOptins1 = {
			type:'horizontalBar',
			labels: ['Used Channel 1', 'Used Channels 2', 'Used Channels 3'],
			dataset:[{
				backgroundColor: this.layoutConfigService.getConfig('colors.state.primary'),
				data: [
					50, 45, 0
				],
			}],
			xAxes_Display:true,
			yAxes_Display:true,
		};
		this.widgetCusomerSummaryOptins2 = {
			type:'horizontalBar',
			labels: ['Used Channel 1', 'Used Channels 2', 'Used Channels 3'],
			dataset:[{
				backgroundColor: this.layoutConfigService.getConfig('colors.state.primary'),
				data: [
					15, 80, 10
				],
			}],
			xAxes_Display:true,
			yAxes_Display:false,
		};
		this.widgetCusomerSummaryOptins3 = {
			type:'horizontalBar',
			labels: ['Used Channel 1', 'Used Channels 2', 'Used Channels 3'],
			dataset:[{
				backgroundColor: this.layoutConfigService.getConfig('colors.state.primary'),
				data: [
					15, 80, 15
				],
			}],
			xAxes_Display:true,
			yAxes_Display:false,
		};

		this.interactionVolumeOptions={
			type:'bar',
			labels:["AIRITIME","AIRITIME","AIRITIME", "BILL PAYMENT", "TRANSFERS"],
			dataset: [{
				backgroundColor: this.layoutConfigService.getConfig('colors.state.primary'),
				data: [
					62.735, 65.786, 293.260,70.055,103.432
				],
			}]
		};
		this.interactiveValueOptions={
			type:'bar',
			labels:["AIRITIME","AIRITIME","AIRITIME", "BILL PAYMENT", "TRANSFERS"],
			dataset: [{
				backgroundColor: this.layoutConfigService.getConfig('colors.state.primary'),
				data: [
					0.030458563, 0.030525392,0.148931527,0.070471148,2.324310685
				],
			}]
		}
		this.widgetWeeklyStrechedVolumeOptions={
			type:'bar',
			labels:["Week6","Week7","Week8", "Week9", "Week10", "Week11", "Week12", "Week13"],
			dataset: [{
				backgroundColor: this.layoutConfigService.getConfig('colors.state.primary'),
				data: [
					100,100,100,100,100,100,100,100
				],
			}]
		};
	}
}
