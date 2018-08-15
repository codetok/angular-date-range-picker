import { Directive, ElementRef, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import * as momentImported from 'moment'; const moment = momentImported;

@Directive({
    selector: 'input[cdkpicker]',
    exportAs: 'DatepickerRangeInput',
    host: {
        '(focus)': '_onFocus()',
    }
})


export class DatepickerRangeInput {

    public dateRangePicker: any;

    @Input()
    set cdkpicker(value: any) {
        this.dateRangePicker = value;
        this.dateRangePicker
            .dateSubject
            .subscribe(res => {
                this._el.nativeElement.value = res;
            });
    }

    constructor(public _el: ElementRef) {

    }

    _onFocus() {
        this.dateRangePicker.show = true;
        this.dateRangePicker.setDates(this._el.nativeElement.value);
    }


}
