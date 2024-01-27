import { Component } from '@angular/core';
import {SchedulersStoreService} from "../../stores/schedulers-store.service";
import {catchError, delay, Observable, of, startWith, switchMap} from "rxjs";
import {SchedulerHeaderDto} from "../../../dotnet-client";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-scheduler-selector',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './scheduler-selector.component.html',
  styleUrl: './scheduler-selector.component.less'
})
export class SchedulerSelectorComponent  {
  public schedulersHeaders$: Observable<SchedulerHeaderDto[]>;

  constructor(private schedulerStore: SchedulersStoreService) {
    this.schedulersHeaders$ = schedulerStore.schedulersHeaders;
  }


  public setScheduler(scheduler: SchedulerHeaderDto) {
    this.schedulerStore.setActiveScheduler(scheduler);
  }

  public getActiveScheduler(){
    return this.schedulerStore.activeScheduler;
  }
}



