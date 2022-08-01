import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { JSONService } from '../shared/json.service';
import { PickerComponent } from './picker/picker.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: [ './table.component.css' ]
})

export class TableComponent {
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

  //column operations
  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  removeColumn(element) {
    let index = this.columnsToDisplay.indexOf(element)
    if (index > 0) {
      this.columnsToDisplay.splice(index, 1);;
    }
    console.log(element)
  }
  
  resetTable() {
    if(this.displayedColumns.length){
      this.columnsToDisplay = this.displayedColumns.slice();
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}