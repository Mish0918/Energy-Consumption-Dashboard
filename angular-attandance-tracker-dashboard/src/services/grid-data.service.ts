import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GridDataService {
    private gridData: any[] = [{
        "EmployeeID": 1,
        "FullName": "Nancy Davolio",
        "Position": "Sales Representative",
        "TitleOfCourtesy": "Ms.",
        "BirthDate": "1968-12-08T00:00:00.000Z",
        "HireDate": "2011-05-01T00:00:00.000Z",
        "Address": "507 - 20th Ave. E.\r\nApt. 2A",
        "City": "Seattle",
        "Region": "WA",
        "PostalCode": "98122",
        "Country": "USA",
        "HomePhone": "(206) 555-9857",
        "Extension": "5467",
        "ReportsTo": 2
    }, {
        "EmployeeID": 2,
        "FullName": "Andrew Fuller",
        "Position": "Vice President, Sales",
        "TitleOfCourtesy": "Dr.",
        "BirthDate": "1972-02-19T00:00:00.000Z",
        "HireDate": "2011-08-14T00:00:00.000Z",
        "Address": "908 W. Capital Way",
        "City": "Tacoma",
        "Region": "WA",
        "PostalCode": "98401",
        "Country": "USA",
        "HomePhone": "(206) 555-9482",
        "Extension": "3457",
        "ReportsTo": null
    }];

    public getGridData(): any[] {
        return this.gridData;
    }
}