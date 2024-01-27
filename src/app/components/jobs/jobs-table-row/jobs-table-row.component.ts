import {Component, Input, OnInit} from '@angular/core';
import {JobDetailDto, JobService} from "../../../../dotnet-client";
import {SchedulersStoreService} from "../../../stores/schedulers-store.service";
import {Subject} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
    selector: '[app-jobs-table-row]',
    standalone: true,
    imports: [
        AsyncPipe
    ],
    templateUrl: './jobs-table-row.component.html',
    styleUrl: './jobs-table-row.component.less'
})
export class JobsTableRow implements OnInit {
    @Input() public jobName!: string;
    @Input() public jobGroup!: string;

    private _job: Subject<JobDetailDto> = new Subject<JobDetailDto>();

    private readonly jobsBackend: JobService;
    private readonly schedulersStore: SchedulersStoreService;

    public job$ = this._job.asObservable()


    constructor(jobsBackend: JobService, schedulersStore: SchedulersStoreService) {
        this.schedulersStore = schedulersStore;
        this.jobsBackend = jobsBackend;
    }

    ngOnInit(): void {
        this.schedulersStore.activeScheduler.subscribe(schedulerName => {
            console.log("jobName", this.jobName, "ads", this.jobGroup)
            this.jobsBackend.getJobDetails(schedulerName?.name!, this.jobGroup, this.jobName).subscribe(j => this._job.next(j));
        })
    }

}
