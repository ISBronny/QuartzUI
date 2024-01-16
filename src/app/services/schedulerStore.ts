import { Injectable } from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {SchedulerDto, SchedulerHeaderDto, SchedulerService} from "../../dotnet-client";

@Injectable()
export class SchedulerStore {
  private _schedulers: BehaviorSubject<SchedulerHeaderDto[]> = new BehaviorSubject([] as SchedulerHeaderDto[]);

  public readonly schedulers: Observable<SchedulerHeaderDto[]> = this._schedulers.asObservable();

  constructor(private schedulerService: SchedulerService) {
    schedulerService.getAllSchedulers().subscribe(s =>{
      this._schedulers.next(s)
    });
  }
}
