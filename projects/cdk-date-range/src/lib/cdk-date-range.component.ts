import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import * as moment from 'moment';

@Component({
    selector: 'lib-cdk-date-range',
    templateUrl: './datepicker.html',
    styleUrls: ['./datepicker.css']
})
export class CdkDateRangeComponent implements OnInit {

    public dateSubject  = new Subject();
    public show = false;
    public fromSetting;
    public toSetting;
    public fromDateStart = false;
    
    public range: any = {
        from: new Date(),
        to: new Date()
    };
    public otherSettings;

    constructor() {
    }

    setDates(daterange) {
        const dates = daterange.split('-');
        this.fromSetting = moment(dates[0], 'MM/DD/YYYYY' );
        this.range.from = this.fromSetting;
        this.range.to = moment(dates[1], 'MM/DD/YYYYY' );
        this.toSetting = moment(this.fromSetting).add(1, 'M');
    }

    changeMonth(e) {
        if (e === -1) {
            this.fromSetting = moment(this.fromSetting).subtract(1, 'month');
            this.toSetting = moment(this.toSetting).subtract(1, 'month');
        } else {
            this.fromSetting =  moment(this.fromSetting).add(1, 'month');
            this.toSetting =  moment(this.toSetting).add(1, 'month');
        }

    }
    selectStartEndDay(day) {
        if (this.fromDateStart === false) {
            this.range.from = day;
            this.fromDateStart = true;
        } else {
            this.range.to = day;
            this.fromDateStart = false;
        }
    }
    UpdateDate() {
        this.dateSubject.next('May 31, 2015 - May 31, 2016');
        this.close();
    }

    close() {
        this.show = false;
    }

    ngOnInit() { }
}
