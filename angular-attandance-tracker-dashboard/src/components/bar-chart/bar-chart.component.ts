import {
    NgModule, Component, Pipe, PipeTransform, enableProdMode, OnInit,
  } from '@angular/core';
import { GridDataService } from '../../services/grid-data.service'

@Component({
    selector: 'bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.scss'],
    providers: [],
  })

  export class BarChartComponent implements OnInit{

    data: any[] = [];
    constructor(
      private _gridDataService: GridDataService
    ) {}

    ngOnInit(): void {
      console.log("Hello From Bar Chart!!!");
    }

  }