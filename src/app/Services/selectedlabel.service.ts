import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class SelectedLabelService {
  private selectedLabelSubject = new BehaviorSubject<string>('');
 
  setSelectedLabel(label: string) {
    this.selectedLabelSubject.next(label);
  }
 
  getSelectedLabel() {
    return this.selectedLabelSubject.asObservable();
  }
}