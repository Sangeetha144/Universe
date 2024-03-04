import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class FabricService {
 
  constructor(private http:HttpClient) { }
  dataUpdated: EventEmitter<void> = new EventEmitter<void>();
 
 
  emitDataUpdated() {
    this.dataUpdated.emit(); // Emit event to notify subscribers
  }
 
  postData(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/share',data)
  }
  getData():Observable<any>{
    return this.http.get('http://localhost:3000/share')
  }
  deleteData(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/share/${id}`);
  }
}
 