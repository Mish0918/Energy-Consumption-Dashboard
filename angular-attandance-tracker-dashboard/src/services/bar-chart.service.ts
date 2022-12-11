import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class BarChartDataService {
    constructor() {}

    private chartData: any[] = [{
      country: 'USA',
      consumption: 2331.6
    }, {
      country: 'China',
      consumption: 1386.1
    }, {
      country: 'Russia',
      consumption: 667.7
    }, {
      country: 'Japan',
      consumption: 514.6
    }, {
      country: 'India',
      consumption: 375.8
    }, {
      country: 'Germany',
      consumption: 330.5
    }];

    public getBarChartData() {
        return this.chartData;
    }

}
