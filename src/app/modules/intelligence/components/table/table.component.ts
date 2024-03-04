import { Component, ViewChild } from '@angular/core';
import { Customer } from 'src/app/Model/Customer';
import { MasterService } from 'src/app/Services/master.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
 
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  customerlist!: Customer[];
  dataSource: any;
  displayedColumns: string[] = ["firstName", "lastName", "email", "details"]; // Update displayedColumns
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 
  constructor(private service: MasterService, private dialog: MatDialog) {
    this.loadcustomer();
  }
 
  loadcustomer() {
    this.service.GetCustomer().subscribe(res => {
      this.customerlist = res.map(customer => ({ ...customer, detailsVisible: true })); // Initialize detailsVisible to true
      this.dataSource = new MatTableDataSource<Customer>(this.customerlist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
 
  toggleDetailsVisibility(customer: Customer) {
    customer.detailsVisible = !customer.detailsVisible;
  }
 
  // Define the Filterchange method
  Filterchange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
  }
}
