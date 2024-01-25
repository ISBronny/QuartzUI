import { Component } from '@angular/core';
import {SchedulersStoreService} from "../../stores/schedulers-store.service";
import {delay, Observable} from "rxjs";
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
  public isLoaded: boolean = false;

  public schedulersHeaders$: Observable<SchedulerHeaderDto[]>;

  constructor(private schedulerStore: SchedulersStoreService) {
    this.schedulersHeaders$ = schedulerStore.schedulersHeaders;
    this.schedulersHeaders$.subscribe(_ =>{
      this.isLoaded = true
      console.log("ASD", _)
    } )
  }



  public setScheduler(scheduler: SchedulerHeaderDto) {
    this.schedulerStore.setActiveScheduler(scheduler);
  }

  public getActiveScheduler(){
    return this.schedulerStore.activeScheduler;
  }
}



