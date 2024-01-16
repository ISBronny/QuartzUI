import { Component } from '@angular/core';
import {SchedulerStore} from "./services/schedulerStore";
import {TuiActiveZoneModule} from '@taiga-ui/cdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuartzUI';


}
