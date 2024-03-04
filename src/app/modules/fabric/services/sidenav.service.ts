import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  
 
  constructor(private http: HttpClient) { }
 
  getDataShareProjects(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/dataShare');
  }
  getDbName(){
    return this.http.get<any[]>('http://localhost:3000/Demand Insights')
  }
}
