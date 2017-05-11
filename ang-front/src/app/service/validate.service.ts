import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  ValidateReport(reportobj){
    if(reportobj.reportname == undefined ||reportobj.email == undefined ||reportobj.value == undefined){
      return false;
    }else{
      return true;
    }
  }

  //Regexp email
  ValidateEmail(email){
    const reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return reg.test(email);
  }
}
