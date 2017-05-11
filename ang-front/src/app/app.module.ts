import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import{RouterModule,Routes} from '@angular/router'; //import route

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component'; //import navbar
import { HomeComponent } from './components/home/home.component'; //import home
import { FormComponent } from './components/form/form.component';
import { ReportComponent } from './components/report/report.component';

import {ValidateService} from './service/validate.service';
import {ReportService} from './service/report.service';
import {FlashMessagesModule} from 'angular2-flash-messages';

//Create Route
const appRoutes : Routes = [
  {path:'',component:HomeComponent},
  {path:'form',component:FormComponent},
  {path:'report',component:ReportComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FormComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
