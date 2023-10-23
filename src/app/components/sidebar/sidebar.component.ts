import { Component, HostListener, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Output() closeSidebar = new EventEmitter();

  links = [
    {
      name: 'Dashboard',
      iconUrl: 'assets/dashboard.svg',
      linkUrl: '/dashboard',
    },
    {
      name: 'Task',
      iconUrl: 'assets/tasks.svg',
      linkUrl: '/tasks',
    },
    {
      name: 'Message',
      iconUrl: 'assets/messages.svg',
      linkUrl: '/messages',
    },
    {
      name: 'Settings',
      iconUrl: 'assets/settings.svg',
      linkUrl: '/settings',
    },
  ];

  @HostListener('document:click')
  onClickedOutside() {
    this.closeSidebar.emit();
  }
}
