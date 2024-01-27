import {Component, NgModule} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppNavbarComponent} from "./components/app-navbar/app-navbar.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {HttpClientModule} from "@angular/common/http";
import { initFlowbite } from 'flowbite';
import {PageComponent} from "./components/page/page.component";


@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, AppNavbarComponent, SidebarComponent, HttpClientModule, PageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'quartz-ui';

  ngOnInit(): void {
    initFlowbite();
  }
}
