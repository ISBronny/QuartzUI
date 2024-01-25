import { Component } from '@angular/core';
import {SchedulerSelectorComponent} from "../scheduler-selector/scheduler-selector.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    SchedulerSelectorComponent
  ],
  templateUrl: './app-navbar.component.html',
  styleUrl: './app-navbar.component.less'
})
export class AppNavbarComponent {

}
