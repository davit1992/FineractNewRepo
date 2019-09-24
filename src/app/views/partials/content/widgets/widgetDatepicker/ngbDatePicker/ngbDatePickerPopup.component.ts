import {Component, Input} from '@angular/core';

@Component({
  selector: 'ngb-datepicker-popup',
  templateUrl: './ngbDatePickerPopup.component.html'
})
export class NgbDatePickerPopup {
    @Input() name: string; 
    model;
}