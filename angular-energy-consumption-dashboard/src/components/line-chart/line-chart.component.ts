import {
    NgModule, Component, Pipe, PipeTransform, enableProdMode, OnInit,
  } from '@angular/core';
import { LineChartDataService } from '../../services/line-chart.service'

@Component({
    selector: 'line-chart',
    templateUrl: './line-chart.component.html',
    styleUrls: ['./line-chart.component.scss'],
    providers: [],
  })

  export class LineChartComponent implements OnInit{

    data: any = null;
    constructor(
      private _lineChartDataService: LineChartDataService
    ) {}

    ngOnInit(): void {
      console.log("Hello From Line Chart!!!");
      this.data = this._lineChartDataService.getBarChartData();
    }

  }