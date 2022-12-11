import {
    NgModule, Component, Pipe, PipeTransform, enableProdMode, OnInit,
  } from '@angular/core';
import { BarChartDataService } from '../../services/bar-chart.service'

@Component({
    selector: 'bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.scss'],
    providers: [],
  })

  export class BarChartComponent implements OnInit{

    data: any[] = [];
    constructor(
      private _barChartDataService: BarChartDataService
    ) {}

    ngOnInit(): void {
      console.log("Hello From Bar Chart!!!");
      this.data = this._barChartDataService.getBarChartData();
    }

  }