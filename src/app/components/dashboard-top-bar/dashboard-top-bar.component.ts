import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard-top-bar',
  templateUrl: './dashboard-top-bar.component.html',
  styleUrls: ['./dashboard-top-bar.component.css'],
})
export class DashboardTopBarComponent {
  @Output() onToggleNav = new EventEmitter();
  
  handleToppleNav() {
    this.onToggleNav.emit();
  }
}
