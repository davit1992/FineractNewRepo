import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule, } from '@angular/material';
import { CoreModule } from '../../../../core/core.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// Datatable
import { DataTableComponent } from './general/data-table/data-table.component';
// General widgets
import { Widget1Component } from './widget1/widget1.component';
import { Widget4Component } from './widget4/widget4.component';
import { Widget5Component } from './widget5/widget5.component';
import { Widget12Component } from './widget12/widget12.component';
import { Widget14Component } from './widget14/widget14.component';
import { Widget26Component } from './widget26/widget26.component';
import { Timeline2Component } from './timeline2/timeline2.component';
import { WidgetLastWeekSummary } from './widgetLastWeekSummary/WidgetLastWeekSummary.component';
import { WidgetDailyAverage } from './widgetDailyAverage/WidgetDailyAverage.component';
// import { NgbDatePickerPopup } from './widgetDatepicker/ngbDatePicker/ngbDatePickerPopup.component';
import{NgbModule}from '@ng-bootstrap/ng-bootstrap';
import { NgbDatePickerModule } from './widgetDatepicker/ngbDatePicer.module';
import { PortletModule } from '../general/portlet/portlet.module';
import { WidgetPieChartComponent } from './widgetPieChart/WidgetPieChart.component';
import { WidgetBarChartComponent } from './widgetBarChart/WidgetBarChart.component';
import { WidgetTransactionVolumeHourlyComponent } from './WidgetTransactionVolumeHourly/WidgetTransactionVolumeHourly.component';
import { WidgetCustomerParticipationSummaryChart } from './WidgetCustomerParticipationSummaryChart/WidgetCustomerParticipationSummaryChart.component';
import { WidgetInteractionVolume } from './WidgetInteractionVolume/WidgetInteractionVolume.component';
import { WidgetWeeklyStrechedVolume } from './WidgetWeeklyStrechedVolume/WidgetWeeklyStrechedVolume.component';
import { WidgetInteractionValue } from './WidgetInteractionValue/WidgetInteractionValue.component';
import { WidgetIncomingWires } from './WidgetIncomingWires/WidgetIncomingWires.component';

@NgModule({
	declarations: [
		DataTableComponent,
		// Widgets
		Widget1Component,
		Widget4Component,
		Widget5Component,
		Widget12Component,
		Widget14Component,
		Widget26Component,
		Timeline2Component,
		WidgetPieChartComponent,
		WidgetBarChartComponent,
		WidgetLastWeekSummary,
		WidgetDailyAverage,

		WidgetTransactionVolumeHourlyComponent,
		// WidgetInteractionVolumeComponent,
		WidgetCustomerParticipationSummaryChart,
		WidgetInteractionVolume,
		WidgetWeeklyStrechedVolume,
		WidgetInteractionValue,
		WidgetIncomingWires,
	],
	exports: [
		DataTableComponent,
		// Widgets
		Widget1Component,
		Widget4Component,
		Widget5Component,
		Widget12Component,
		Widget14Component,
		Widget26Component,
		Timeline2Component,
		WidgetPieChartComponent,
		WidgetBarChartComponent,
		WidgetLastWeekSummary,
		WidgetDailyAverage,

		WidgetTransactionVolumeHourlyComponent,
		// WidgetInteractionVolumeComponent,
		WidgetCustomerParticipationSummaryChart,
		WidgetInteractionVolume,
		WidgetWeeklyStrechedVolume,
		WidgetInteractionValue,
		WidgetIncomingWires
	],
	imports: [
		CommonModule,
		PerfectScrollbarModule,
		MatTableModule,
		CoreModule,
		MatIconModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		MatPaginatorModule,
		MatSortModule,
		NgbModule,
		NgbDatePickerModule,
		PortletModule
	]
})
export class WidgetModule {
}
