import { Component } from '@angular/core';
import {JobService, KeyDto} from "../../../dotnet-client";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {SchedulersStoreService} from "../../stores/schedulers-store.service";
import {Subject} from "rxjs";
import {JobsTableRow} from "./jobs-table-row/jobs-table-row.component";

@Component({
  selector: 'tr[app-jobs-page]',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    NgIf,
    JobsTableRow
  ],
  templateUrl: './app-jobs-page.component.html',
  styleUrl: './app-jobs-page.component.less'
})
export class AppJobsPageComponent {

  private _jobs = new Subject<KeyDto[]>

  public jobs$ = this._jobs.asObservable();

  constructor(private jobServiceBackend : JobService, schedulerService : SchedulersStoreService) {
    schedulerService.activeScheduler.subscribe(s => {
      console.log("SHIT", s)
      if(s !== undefined)
        jobServiceBackend.getJobKeys(s.name!).subscribe(keys => {
          console.log("SHIT2", keys)
          this._jobs.next(keys)
        })
    })
  }




}
