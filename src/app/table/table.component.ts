import { Component, OnInit } from '@angular/core';
import { JSONService } from '../shared/json.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: [ './table.component.css' ]
})

export class TableComponent implements OnInit{
  data = [];
  columns=[];

  constructor(private jsonService: JSONService) {}

  ngOnInit(){
    this.jsonService.getJSON().subscribe(json => {
      json.map(obj => this.data.push(obj))
    });
  }

  getColumnRows() {
    return this.data[0].keys();
  }

}