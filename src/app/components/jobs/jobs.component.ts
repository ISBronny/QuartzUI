import { Component } from '@angular/core';
import {JobService} from "../../../dotnet-client";

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.less'
})
export class JobsComponent {

  constructor(private jobServiceBackend : JobService) {

  }



}
