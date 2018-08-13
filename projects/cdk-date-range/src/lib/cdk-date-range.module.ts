import { NgModule } from '@angular/core';
import { CdkDateRangeComponent } from './cdk-date-range.component';
import { CalendarComponent } from './calendar.component';
import { CommonModule } from '@angular/common';
import { DatepickerRangeInput } from './datepicker-input.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      CdkDateRangeComponent,
      CalendarComponent,
      DatepickerRangeInput
    ],
  exports: [CdkDateRangeComponent, DatepickerRangeInput]
})
export class CdkDateRangeModule { }
