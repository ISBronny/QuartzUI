import {provideAnimations} from "@angular/platform-browser/animations";
import {TuiRootModule} from "@taiga-ui/core";
import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter, Routes} from '@angular/router';

import {routes} from './app.routes';
import {environment} from "../environments/environment";
import {BASE_PATH, SchedulerService} from "../dotnet-client";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {SchedulersStoreService} from "./stores/schedulers-store.service";
import {SchedulerSelectorComponent} from "./components/scheduler-selector/scheduler-selector.component";
import {AppJobsPageComponent} from "./components/jobs/app-jobs-page.component";

export const appConfig: ApplicationConfig = {
  providers: [
    AppJobsPageComponent,
    provideAnimations(),
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(TuiRootModule),
    {provide: BASE_PATH, useValue: environment.quartzApiUrl},
    SchedulersStoreService,
    SchedulerService,
    HttpClientModule]
};
