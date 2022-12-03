import {
    NgModule, Component, Pipe, PipeTransform, enableProdMode, OnInit,
  } from '@angular/core';

@Component({
    selector: 'data-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    providers: [],
  })
  export class GridComponent implements OnInit{

    ngOnInit(): void {
      console.log("Hello There!!!");
    }

  }