import { NgModule } from '@angular/core';
import { NgbDatePickerPopup } from '../widgetDatepicker/ngbDatePicker/ngbDatePickerPopup.component';
import{NgbModule}from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	declarations: [
        NgbDatePickerPopup
	],
	exports: [
        NgbDatePickerPopup
	],
	imports: [
		NgbModule,
	]
})
export class NgbDatePickerModule {
}
