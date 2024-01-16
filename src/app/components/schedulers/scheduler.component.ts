import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";

import {SchedulerHeaderDto} from "../../../dotnet-client";

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
})
export class SchedulerComponent {

  @Input() scheduler: SchedulerHeaderDto = {};

}
