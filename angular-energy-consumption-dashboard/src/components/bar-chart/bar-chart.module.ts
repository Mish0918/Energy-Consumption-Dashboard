import {
    NgModule, Component, Pipe, PipeTransform, enableProdMode, CUSTOM_ELEMENTS_SCHEMA,
  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BarChartComponent} from './bar-chart.component'
import { DxChartModule } from 'devextreme-angular';

@NgModule({
  declarations: [BarChartComponent],
  imports: [
    BrowserModule,
    DxChartModule
  ],
  exports: [BarChartComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BarChartModule { }
