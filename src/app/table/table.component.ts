import { Component, OnInit } from '@angular/core';
import { JSONService } from '../shared/json.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: [ './table.component.css' ]
})

export class TableComponent implements OnInit{

  constructor(private jsonService: JSONService) {}

  ngOnInit(){
    this.jsonService.getJSON().subscribe(a => console.log(a));
  }

}