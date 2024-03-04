import { Component ,OnInit, ViewChild } from '@angular/core';
import { TileService } from '../../../../Services/tile.service';
import { FormControl } from '@angular/forms';
import { MatDatepickerInput, MatDatepickerInputEvent } from '@angular/material/datepicker';
@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  cardData: any[] = [];
  @ViewChild('fromDatePicker', { read: MatDatepickerInput }) fromDatePickerInput!: MatDatepickerInput<any>;
  fromDatePicker: any;
 
  constructor(private service:TileService){}
  // getTitle(item: any): string {
  //   if (item.activeUser) {
  //     return 'Active User';
  //   } else if (item.frequentlyUsedProduct) {
  //     return 'Frequently Used Product';
  //   } else if (item.activeProduct) {
  //     return 'Active Product';
  //   } else if (item.minimalUsedProduct) {
  //     return 'Minimal Used Product';
  //   } else if (item.appLoadingTime) {
  //     return 'App Loading Time';
  //   }
  //   return ''; // Add this line to ensure a string is always returned
  // }
  
  // getValue(item: any): string {
  //   if (item.activeUser) {
  //     return item.activeUser;
  //   } else if (item.frequentlyUsedProduct) {
  //     return item.frequentlyUsedProduct;
  //   } else if (item.activeProduct) {
  //     return item.activeProduct;
  //   } else if (item.minimalUsedProduct) {
  //     return item.minimalUsedProduct;
  //   } else if (item.appLoadingTime) {
  //     return item.appLoadingTime;
  //   }
  //   return ''; // Add this line to ensure a string is always returned
  // }
  
  
  ngOnInit(): void {
    this.service.getdata().subscribe((data: any) => {
console.log(data)
      this.cardData = data;
    });
    this.futureDateDisable();
    this.setDates();
  }
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
 
    this.date = new FormControl(new Date());
   
    // Set the "From" datepicker value to yesterday's date in the format m/d/yyyy
    const yesterday = this.yesterdayDate;
    const formattedDate = (yesterday.getMonth() + 1) + '/' + yesterday.getDate() + '/' + yesterday.getFullYear();
    const fromDatePickerInput = document.getElementsByName('fromDate')[0] as HTMLInputElement;
    if (fromDatePickerInput) {
      fromDatePickerInput.value = formattedDate;
    }
  }
  

}
