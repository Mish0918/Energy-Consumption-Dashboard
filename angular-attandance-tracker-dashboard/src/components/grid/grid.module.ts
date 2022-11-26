import {
    NgModule, Component, Pipe, PipeTransform, enableProdMode,
  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {
    DxDataGridModule,
    DxBulletModule,
    DxTemplateModule,
} from 'devextreme-angular';

@NgModule({
  imports: [],
  exports: []
})
export class GridModule { }
