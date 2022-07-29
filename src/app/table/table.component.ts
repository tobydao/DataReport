import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { JSONService } from '../shared/json.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: [ './table.component.css' ]
})

export class TableComponent implements OnInit{
  data = [];
  displayedColumns = [];
  columnsToDisplay = [];
  dataSource = new MatTableDataSource<Object>();

  constructor(private jsonService: JSONService) {
    this.jsonService.getJSON().subscribe(json => {
      this.data = json;
      this.displayedColumns = Object.keys(this.data[0])
      this.columnsToDisplay = this.displayedColumns.slice();
      this.dataSource.data = this.data;
    })
  }

  ngOnInit(){
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filter);
  }
}