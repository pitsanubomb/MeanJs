# MeanJs

Alert
- Start node on cmd (Make node work all function can look in route)
- Start angular (Not close it auto compile and debug error)
- http://localhost:4200/ (For test)

---How to install angular cli --

ng new PROJECT-NAME //ang-front
cd PROJECT-NAME //front
ng serve run angular

--How to config file--

angular-cli.jsom
 
 "outDir": "../public",

-- How to make components --

ng g c my-new-component

Start Project
1.Make component(navbar,home,form,report)
	- ng g c navbar
	- ng g c home
	- ng g c form
	- ng g c report
2.Make router 
	- Open app.module.ts page
	import{RouterModule,Routes} from '@angular/router';
	import { NavbarComponent } from './components/navbar/navbar.component'; //import navbar
	import { HomeComponent } from './components/home/home.component'; //import home
	import { FormComponent } from './components/form/form.component';
	import { ReportComponent } from './components/report/report.component';

	const appRoutes : Routes = [
  {path:'',component:HomeComponent},
  {path:'form',component:FormComponent},
  {path:'report',component:ReportComponent},
]
	
	add RouterModule.forRoot(appRoutes), in imports:[]
3.Make navbar and add css
	edit index.html
	add
		<link rel="stylesheet" href="https://bootswatch.com/simplex/bootstrap.min.css">

		<base href="/">
	edit navbar.component.html
		exam in file
			**  [routerLinkActive]="['active']" [routerLinkActiveOptions] = "{exact:true}"><a [routerLink]="['/']"> make route and active
4.Make Form and put data
	-form.components.ts **
	install angular2-flash-messages
		npm i angular2-flash-messages --save
	import {FlashMessagesService} from 'angular2-flash-messages';
	import {Router} from '@angular/router'

	--IMPORT SERVICE-- !! After make service
		import {ValidateService} from '../../service/validate.service';

		import {ReportService} from '../../service/report.service';

	** cssClass is add css 
	** onReportSave() make function 
	
	-form components.html
		** [(ngModel)]="email" = blinding data 
		(submit)="onReportSave()" call function
5.Make service
	ng g service service name
	edit validate service file
		exam in file validate.service.ts
	edit report service
		exam in file report.service.ts
6.Make report
	make report.ts look in report.ts
	edit report.component.ts
	edit node in report.js(route Have send json file)
	edit report.component.html (Havve loop)
