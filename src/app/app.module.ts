import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TuiButtonModule,
  TuiModeModule, TuiThemeNightModule, TuiBrightness, TuiLinkModule, TuiScrollbarModule
} from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {Inject, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SchedulersPageComponent} from "./components/schedulers/schedulers-page.component";
import {HttpClientModule} from "@angular/common/http";
import {
  ApiModule, BASE_PATH,
  CalendarService,
  JobService,
  SchedulerService,
  TriggerService
} from "../dotnet-client";
import {environment} from "../environments/environment";
import {SchedulerStore} from "./services/schedulerStore";
import {SchedulerComponent} from "./components/schedulers/scheduler.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";

@NgModule({
  declarations: [
    AppComponent,
    SchedulersPageComponent,
    SchedulerComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    TuiThemeNightModule,
    TuiModeModule,
    ApiModule,
    TuiLinkModule,
    TuiScrollbarModule
  ],
  providers: [
    { provide: BASE_PATH, useValue: environment.quartzApiUrl },
    CalendarService,
    JobService,
    SchedulerService,
    TriggerService,
    SchedulerStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
