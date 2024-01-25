import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    RouterOutlet
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.less'
})
export class SidebarComponent {
  public links = [
    {
      link: '/jobs',
      name: "Jobs"
    },
    {
      link: '/triggers',
      name: "Triggers"
    },
    {
      link: '/schedulers',
      name: "Schedulers"
    },
  ]
}
