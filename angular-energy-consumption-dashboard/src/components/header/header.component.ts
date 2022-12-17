import {
    NgModule, Component, Pipe, PipeTransform, enableProdMode, OnInit,
  } from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [],
  })

  export class HeaderComponent implements OnInit{

    data: any[] = [];
    downloadButtonOptions: any;
    constructor(
    ) {}

    ngOnInit(): void {
      console.log("Hello from Header!!!");
      this.downloadButtonOptions = {
        icon: 'download',
        onClick: () => {
          notify('Download button has been clicked!');
        },
      };
    }

  }