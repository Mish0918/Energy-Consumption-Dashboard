import {
    NgModule, Component, Pipe, PipeTransform, enableProdMode, CUSTOM_ELEMENTS_SCHEMA,
  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LineChartComponent} from './line-chart.component'
import { DxChartModule } from 'devextreme-angular';

@NgModule({
  declarations: [LineChartComponent],
  imports: [
    BrowserModule,
    DxChartModule
  ],
  exports: [LineChartComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LineChartModule { }
