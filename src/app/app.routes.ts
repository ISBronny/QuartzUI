import { Routes } from '@angular/router';
import {AppJobsPageComponent} from "./components/jobs/app-jobs-page.component";
import {TriggersComponent} from "./components/triggers/triggers.component";
import {SchedulersComponent} from "./components/schedulers/schedulers.component";

export const routes: Routes = [
  {path:'', component: AppJobsPageComponent},
  {path:'triggers', component: TriggersComponent},
  {path:'jobs', component: AppJobsPageComponent},
  {path:'schedulers', component: SchedulersComponent}

];
