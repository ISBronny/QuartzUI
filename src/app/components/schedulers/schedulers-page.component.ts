import { Component } from '@angular/core';
import {Observable} from "rxjs";

import {SchedulerHeaderDto} from "../../../dotnet-client";
import {SchedulerStore} from "../../services/schedulerStore";

@Component({
  selector: 'app-schedulers-page',
  templateUrl: './schedulers-page.component.html',
})
export class SchedulersPageComponent {
  schedulers$: Observable<SchedulerHeaderDto[]> = new Observable<SchedulerHeaderDto[]>();

  constructor(private readonly schedulerStore: SchedulerStore) {
    this.schedulers$ = schedulerStore.schedulers
  }

}
