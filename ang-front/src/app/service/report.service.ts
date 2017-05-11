import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ReportService {
  

  reportobj : any;

  constructor(private http:Http) { }

  addReport(reportobj){
    var url = "http://localhost:8080/report/form"
    let headers = new Headers(); // Create Headers
    headers.append('Content-type','application/json');
    return this.http.post(url,reportobj,{headers : headers})
    .map(res => res.json()); // Postdata
  }
  getReport(){
    var url = "http://localhost:8080/report/view"
    return this.http.get(url)
    .map(res => res.json()); // Getdata
  }
}
