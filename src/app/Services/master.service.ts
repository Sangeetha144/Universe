import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../Model/Customer';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  private apiUrl = 'http://localhost:3000/customer'; // Replace 'your_api_url' with your actual API endpoint

  constructor(private http: HttpClient) { }

  GetCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl); // Adjust according to your API structure
  }

  // Implement other methods such as addCustomer(), editCustomer(), deleteCustomer(), etc.
}
