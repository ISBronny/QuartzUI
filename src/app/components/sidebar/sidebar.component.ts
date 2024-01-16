// sidebar.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isOpen: boolean = true;
  menuItems: string[] = ['Home', 'About', 'Services', 'Contact'];

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
