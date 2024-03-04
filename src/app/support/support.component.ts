import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent {

  showIcons: boolean = false;

  toggleIcons(): void {
    this.showIcons = !this.showIcons;
  }
}
