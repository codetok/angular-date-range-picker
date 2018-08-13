import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule, MatDatepickerModule } from '@angular/material';
import { AppComponent } from './app.component';

import { CdkDateRangeModule } from 'projects/cdk-date-range/src/public_api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CdkDateRangeModule,
    MatInputModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
