import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {
    BehaviorSubject, delay,
    interval,
    Observable,
    shareReplay,
    startWith,
    Subject, Subscription,
    switchMap
} from "rxjs";
import {List} from "postcss/lib/list";
import {SchedulerHeaderDto, SchedulerService} from "../../dotnet-client";

@Injectable({
    providedIn: 'root',
})
export class SchedulersStoreService {
    private _schedulersHeaders: BehaviorSubject<SchedulerHeaderDto[]> = new BehaviorSubject([] as SchedulerHeaderDto[]);
    private _activeScheduler: BehaviorSubject<SchedulerHeaderDto | undefined> = new BehaviorSubject<SchedulerHeaderDto | undefined>(undefined)

    public readonly schedulersHeaders: Observable<SchedulerHeaderDto[]> = this._schedulersHeaders.asObservable();
    public readonly activeScheduler: Observable<SchedulerHeaderDto | undefined> = this._activeScheduler.asObservable()

    constructor(private schedulerBackendService: SchedulerService) {
        schedulerBackendService.getAllSchedulers().pipe(shareReplay())
            .subscribe(x => {
                this._schedulersHeaders.next(x)
                if (x.length > 0 && x[0] !== undefined)
                    this._activeScheduler.next(x[0])
            })
    }

    public setActiveScheduler(scheduler: SchedulerHeaderDto) {
        this._activeScheduler.next(scheduler)
    }
}
