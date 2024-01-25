import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, shareReplay, Subject} from "rxjs";
import {List} from "postcss/lib/list";
import {SchedulerHeaderDto, SchedulerService} from "../../dotnet-client";

@Injectable({
  providedIn: 'root',
})
export class SchedulersStoreService {
  private _schedulersHeaders: Subject<SchedulerHeaderDto[]> = new Subject();
  private _activeScheduler: Subject<SchedulerHeaderDto | undefined> = new Subject<SchedulerHeaderDto | undefined>()

  public readonly schedulersHeaders: Observable<SchedulerHeaderDto[]> = this._schedulersHeaders.asObservable();
  public readonly activeScheduler: Observable<SchedulerHeaderDto | undefined> = this._activeScheduler.asObservable()

  constructor(private schedulerBackendService: SchedulerService) {
    schedulerBackendService.getAllSchedulers().pipe(shareReplay())
      .subscribe(x => {
        this._schedulersHeaders.next(x)
        this._activeScheduler.next(x.length > 0 ? x[0] : undefined)
      })
  }

  public setActiveScheduler(scheduler: SchedulerHeaderDto) {
    this._activeScheduler.next(scheduler)
  }
}
