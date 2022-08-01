import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class JSONService {

  constructor(private http: HttpClient) {} 

  public getJSON(): Observable<any> {
    return this.http.get("assets/data.json");
  }
}
