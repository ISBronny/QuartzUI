import { Routes } from '@angular/router';
import {JobsComponent} from "./components/jobs/jobs.component";
import {TriggersComponent} from "./components/triggers/triggers.component";
import {SchedulersComponent} from "./components/schedulers/schedulers.component";

export const routes: Routes = [
  {path:'', component: JobsComponent},
  {path:'triggers', component: TriggersComponent},
  {path:'jobs', component: JobsComponent},
  {path:'schedulers', component: SchedulersComponent}

];
