import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../service/validate.service';
import {ReportService} from '../../service/report.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  reportname :String;
  email : String;
  value : Number;
  
  constructor(
    private ValidateService:ValidateService,
    private flm:FlashMessagesService,
    private ReportService:ReportService,
    private router:Router
    ) { }

  ngOnInit() {
  }

  onReportSave(){
    console.log("send data name : "+this.reportname+" email :"+this.email+" value :"+this.value);
    const reportobj = {
      reportname : this.reportname,
      email : this.email,
      value : this.value     
    }

    //Validate make Require make after make validateservice
    if(!this.ValidateService.ValidateReport(reportobj)){
      this.flm.show("Please insert data all",{cssClass:'alert-danger',timeout : 2000});
      return false;
    }
    if(!this.ValidateService.ValidateEmail(reportobj.email)){
      this.flm.show("Email is wrong format",{cssClass:'alert-warning',timeout : 2000});
      return false;
    }

    //Save Report
    this.ReportService.addReport(reportobj).subscribe(data => {
      if(data.success){
        this.flm.show("Report Insert!!",{cssClass:'alert-success',timeout : 2000});
        this.router.navigate(['/report'])
      }else{
        this.flm.show("Report Fail Insert!!",{cssClass:'alert-danger',timeout : 2000});
        this.router.navigate(['/form'])
      }
    });
  }

}
