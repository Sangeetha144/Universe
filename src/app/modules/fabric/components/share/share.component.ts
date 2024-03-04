import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators,FormGroup } from '@angular/forms';
import { FabricService } from '../../services/fabric.service';
 
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { CreatedbComponent } from '../createdb/createdb.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
selector: 'app-share',
templateUrl: './share.component.html',
styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit{
 dataForm:FormGroup
datashares: string[] = [
  'Data Share Name 1',
  'Data Share Name 2',
  'Data Share Name 3'
];
objectshares: string[] = [
  'Object Share Name 1',
  'Object Share Name 2',
  'Object Share Name 3'
];
accounts: string[] = [
  'Account 1',
  'Account 2',
  'Account 3'
];
constructor(private _fb:FormBuilder, private service:FabricService,private dialog:MatDialog,private snackbar:MatSnackBar){
  this.dataForm = this._fb.group({

    dataShare:  ['', Validators.required],
  objectShare:['', Validators.required],
account:['', Validators.required],
})
}
 
onFormSubmit(){
if(this.dataForm.valid){
  this.service.postData(this.dataForm.value).subscribe({
    next:(value:any)=>{
      this.snackbar.open('Successfully added', 'Close', {
        duration: 2000, // Duration in milliseconds
        horizontalPosition: 'right',
        verticalPosition: 'top'
      });
      this.displayData();
   
    },
    error:(err:any)=>{
      console.log(err)
    }
  })
}
}
displayedColumns: string[] = ['dataShare', 'objectShare', 'account', 'revokeAccess'];
dataSource = new MatTableDataSource<any>([]);
selection = new SelectionModel<any>(true, []);


ngOnInit(): void {
  this.displayData();
}

displayData() {
  this.service.getData().subscribe({
    next: (value: any[]) => {
      this.dataSource = new MatTableDataSource(value)
      this.selection = new SelectionModel<any>(true, []);
    },
    error: (err: any) => {
      console.log(err);
    }
  });
}

/** Whether the number of selected elements matches the total number of rows. */
isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
}

/** Selects all rows if they are not all selected; otherwise clear selection. */
toggleAllRows() {
  if (this.isAllSelected()) {
    this.selection.clear();
    return;
  }

  this.selection.select(...this.dataSource.data);
}

/** The label for the checkbox on the passed row */
checkboxLabel(row?: any): string {
  if (!row) {
    return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  }
  return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
}
revokeSelectedRows() {
  const selectedRows = this.selection.selected;
  selectedRows.forEach(row => {
    // Assuming each row has a unique identifier like 'id'
    this.service.deleteData(row.id).subscribe({
      next: () => {
        // Remove the row from the dataSource
        const index = this.dataSource.data.indexOf(row);
        if (index > -1) {
          this.dataSource.data.splice(index, 1);
          this.dataSource._updateChangeSubscription(); // Refresh the table
        }
      },
      error: (error: any) => {
        console.error('Failed to delete record:', error);
      }
    });
  });
  // Clear selection
  this.selection.clear();
}
 resetAll(){
this.dataForm.reset()
Object.keys(this.dataForm.controls).forEach(key => { 
  this.dataForm.get(key)?.setErrors(null);
});
 }
openPopup(){
  this.dialog.open(CreatedbComponent);
}
}