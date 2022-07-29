import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { JSONService } from '../shared/json.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: [ './table.component.css' ]
})

export class TableComponent implements OnInit{
  dataToDisplay = []
  displayedColumns = [];
  columnsToDisplay = [];
  dataSource = new MatTableDataSource<Object>();

  constructor(private jsonService: JSONService) {
    this.jsonService.getJSON().subscribe(json => {
      this.dataSource.data = json;
      this.displayedColumns = Object.keys(this.dataSource.data[0]);
      this.columnsToDisplay = this.displayedColumns.slice();
      this.dataToDisplay = this.dataSource.data.slice();
    })
  }

  ngOnInit(){
  }

  //ngOnDestroy unsubscribe

  //row operations


  //column operations
  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }
  resetTable() {
    if(this.displayedColumns.length){
      this.columnsToDisplay = this.displayedColumns.slice();
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filter);
  }
}