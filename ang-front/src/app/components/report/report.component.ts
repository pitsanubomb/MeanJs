import { Component, OnInit } from '@angular/core';
import {ReportService} from '../../service/report.service';
import {Report} from '../../report';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers : [ReportService]
})
export class ReportComponent implements OnInit {
  reports : Report[];

  constructor(private ReportService:ReportService) { }

  ngOnInit() {
    this.ReportService.getReport()
    .subscribe(report =>{
      this.reports = report;
    });
  }

}
