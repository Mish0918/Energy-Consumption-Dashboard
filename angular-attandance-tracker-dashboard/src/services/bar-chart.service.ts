import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class BarChartDataService {
    constructor() {}

    private chartData: any[] = [{
        day: 'Monday',
        oranges: 3,
      }, {
        day: 'Tuesday',
        oranges: 2,
      }, {
        day: 'Wednesday',
        oranges: 3,
      }, {
        day: 'Thursday',
        oranges: 4,
      }, {
        day: 'Friday',
        oranges: 6,
      }, {
        day: 'Saturday',
        oranges: 11,
      }, {
        day: 'Sunday',
        oranges: 4,
    }];

    public getBarChartData() {
        return this.chartData;
    }

}
