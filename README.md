# CdkDatepicker

simple date picker to get date-range. 

inspired from http://www.daterangepicker.com/

No Jquery, pure angular implmentation. 



installation 

npm i cdk-date-range

//controller
import { CdkDateRangeModule } from 'cdk-date-range';



view

<div>
    <input  placeholder="date range" [cdkpicker]="daterangePicker2" value="2/2/2018-4/4/2018" >
    <div style="position: relative; ">
            <lib-cdk-date-range #daterangePicker2></lib-cdk-date-range>
    </div>        
</div>


//with mat-input in angular material


<mat-form-field>
        <input matInput placeholder="date range" [cdkpicker]="daterangePicker" value="2/2/2018-4/4/2018" >
    </mat-form-field>
    <div style="position: relative;  ">
        <lib-cdk-date-range #daterangePicker  ></lib-cdk-date-range>
</div>
    
