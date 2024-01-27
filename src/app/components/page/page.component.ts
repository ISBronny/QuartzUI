import { Component } from '@angular/core';
import {AsyncPipe, NgForOf} from "@angular/common";
import {JobsTableRow} from "../jobs/jobs-table-row/jobs-table-row.component";

@Component({
  selector: 'app-page',
  standalone: true,
    imports: [
        AsyncPipe,
        JobsTableRow,
        NgForOf
    ],
  templateUrl: './page.component.html',
  styleUrl: './page.component.less'
})
export class PageComponent {

}
