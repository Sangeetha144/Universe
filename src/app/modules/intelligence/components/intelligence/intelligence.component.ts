import { Component, ViewChild,OnInit, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import {MatDatepicker, MatDatepickerInput, MatDatepickerInputEvent} from '@angular/material/datepicker';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-intelligence',
  templateUrl: './intelligence.component.html',
  styleUrls: ['./intelligence.component.scss']
})
export class IntelligenceComponent implements OnInit{
  // @ViewChild('fromDatePicker') fromDatePicker!: MatDatepicker<any>
  productOptions: string[] = ['CoreX', 'Vendormate', 'Data connect', 'Supply chain analytics', 'Fusion', 'Nuvia', 'E-pay', 'Curate', 'CCXpert'];

  @ViewChild('fromDatePicker', { read: MatDatepickerInput }) fromDatePickerInput!: MatDatepickerInput<any>;
  fromDatePicker: any;
  constructor(private route:ActivatedRoute ){}
 
  showSpinner: boolean = false;
  submitted:boolean=false;
  selectedslicename!:string
  displaytableboolean: boolean = false;
  onSubmit() {
    this.submitted = true; // Set submitted to true
    this.showSpinner = true; // Show spinner
 
    setTimeout(() => {
      this.hideSpinner(); // Hide spinner after 5 seconds
    }, 1000);
    this.submitOption = this.selectedOption
  }
 
  hideSpinner() {
    this.showSpinner = false; // Hide spinner
    this.submitted = false; // Reset submitted flag to false
  }
//autocomplete
typearray = ['No of Logins', 'No of successful payment', 'No of failure payment'];
filteroptions: Observable<string[]> = new Observable<string[]>();
formcontrol = new FormControl('');
selectedOption: string | null = "No of Logins";
submitOption:string|null= "No of Logins";

public clearFilter(): void {
  this.formcontrol.setValue(''); // Clear the selected option
  this.selectedOption = ''; // Reset selectedOption
  
}

ngOnInit(): void {
  this.filteroptions = this.formcontrol.valueChanges.pipe(
    startWith(''),
    map(value => this._FILTER(value || ''))

  );
  this.futureDateDisable();
this.setDates();
this.route.queryParams.subscribe(params => {
  this.selectedslicename = params['label'];

})
}

optionSelected(option: string): void {
  this.selectedOption = option; // Keep track of the selected option

}

private _FILTER(value: string): string[] {
  const searchvalue = value.toLocaleLowerCase();
  return this.typearray.filter(option => option.toLocaleLowerCase().includes(searchvalue));
}

//date picker
minDate!: any;
maxDate!: any;
todayDate!:any
month!:any;
changedFormat!:any;
events: string[] = [];
selectedDate!:any;
yesterdayDate!:any;
date = new FormControl(new Date());


addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
this.selectedDate = event.value;
const changeYear = this.selectedDate.getFullYear();
let changeMonth = this.selectedDate.getMonth() + 1; // Month is zero-based, so we add 1
let changeDate = this.selectedDate.getDate();

if (changeDate < 10) {
  changeDate = '0' + changeDate;
}

if (changeMonth < 10) {
  changeMonth = '0' + changeMonth;
}

this.changedFormat = changeYear+'-'+changeMonth+'-'+changeDate;
if (type === 'change') {
  if (this.changedFormat) {
    // Set the minToDate to one day after the selected date
    const nextDay = new Date(this.changedFormat);
    nextDay.setDate(nextDay.getDate() + 1);
    this.minDate = nextDay;
  }
}
}
setDates(): void {
const today = new Date();
this.todayDate = today.getDate();
this.month = today.getMonth() + 1;

// Set yesterday's date
const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);
this.yesterdayDate = yesterday;

var year = today.getFullYear();
if (this.todayDate < 10) {
  this.todayDate = '0' + this.todayDate;
}
if (this.month < 10) {
  this.month = '0' + this.month;
}

this.maxDate = year + '-' + this.month + '-' + this.todayDate;
}


futureDateDisable(){
var date = new Date();
this.todayDate = date.getDate();
this.month = date.getMonth()+1;
var year = date.getFullYear();

if(this.todayDate < 10){
  this.todayDate = '0' + this.todayDate
}
if(this.month <10){
  this.month = '0'+ this.month
}
this.maxDate = year +'-'+ this.month + '-'+ this.todayDate


  
  
}


clearAll() {
  // Reset other form controls and variables
  this.formcontrol.setValue('No of Logins');
this.submitOption= 'No of Logins'
  this.date = new FormControl(new Date());
 
  // Set the "From" datepicker value to yesterday's date in the format m/d/yyyy
  const yesterday = this.yesterdayDate;
  const formattedDate = (yesterday.getMonth() + 1) + '/' + yesterday.getDate() + '/' + yesterday.getFullYear();
  const fromDatePickerInput = document.getElementsByName('fromDate')[0] as HTMLInputElement;
  if (fromDatePickerInput) {
    fromDatePickerInput.value = formattedDate;
  }
}

handleChartEvent(event: boolean) {
  this.showSpinner = true;
  this.displaytableboolean = false;

  setTimeout(() => {
    this.showSpinner = false; // Hide spinner after 20 seconds
    this.displaytableboolean = true; // Show table after spinner disappears
  }, 2000);
 
  console.log("Received boolean value from LineChartComponent:", event);
  // You can perform further actions based on the received boolean value
}

 

}