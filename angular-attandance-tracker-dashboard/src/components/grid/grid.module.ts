import {
    NgModule, Component, Pipe, PipeTransform, enableProdMode, CUSTOM_ELEMENTS_SCHEMA,
  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { GridComponent} from './grid.component'

import {
    DxDataGridModule,
    DxBulletModule,
    DxTemplateModule,
    DxButtonModule
} from 'devextreme-angular';

@NgModule({
  declarations: [GridComponent],
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    DxButtonModule
  ],
  exports: [GridComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridModule { }
