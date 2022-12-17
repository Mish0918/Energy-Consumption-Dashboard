import { NgModule, Component, enableProdMode, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
    DxListModule, DxToolbarModule, DxSelectBoxModule, DxTemplateModule,
} from 'devextreme-angular';

import { HeaderComponent } from './header.component';

  @NgModule({
    declarations: [HeaderComponent],
    imports: [
      BrowserModule,
      DxToolbarModule,
      DxTemplateModule
    ],
    exports: [HeaderComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  export class HeaderModule { }