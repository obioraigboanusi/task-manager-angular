import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css'],
})
export class DashboardLayoutComponent {
  isOpen = false;

  toggleNav() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click')
  onClose() {
    if (this.isOpen===true) {
      this.isOpen = false;
      console.log('first close', this.isOpen);
    }
  }
}
