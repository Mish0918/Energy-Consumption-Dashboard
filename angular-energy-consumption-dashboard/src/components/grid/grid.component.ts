import {
    NgModule, Component, Pipe, PipeTransform, enableProdMode, OnInit,
  } from '@angular/core';
import { GridDataService } from '../../services/grid-data.service'

@Component({
    selector: 'data-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    providers: [],
  })

  export class GridComponent implements OnInit{

    data: any[] = [];
    constructor(
      private _gridDataService: GridDataService
    ) {}

    ngOnInit(): void {
      this.data = this._gridDataService.getGridData();
    }

  }