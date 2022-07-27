import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({providedIn: 'root'})
export class JSONService {

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
        console.log(data);
    });
  } 

  public getJSON(): Observable<any> {
    return this.http.get("assets/data.json");
  }
}
