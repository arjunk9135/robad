import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pipe } from 'rxjs';
import { PiechartComponent } from './piechart/piechart.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DevicesComponent } from './devices/devices.component';
import { NewdeviceComponent } from './newdevice/newdevice.component';
import { EditdeviceComponent } from './editdevice/editdevice.component';
import { ReportComponent } from './report/report.component';
import { ApproveddevicesComponent } from './approveddevices/approveddevices.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';

const routes: Routes = [
  {path:'pie' , component:PiechartComponent},
  {path:'' , component:LoginComponent},
  {path:'admin' , component:AdminComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'report',component:ReportComponent},
  //{path:'dashboard',component:DashboardComponent},
  {
    path: 'dashboard', component:NavigationComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        
      },
      {
        path: 'admin',
        component: AdminComponent,
        
      },
      {path:'devices',
      component: DevicesComponent
    
      },
      {path:'add-device',
      component: NewdeviceComponent
      },
      {
        path:'show-devices',
        component:DevicesComponent
      },
      {
        path:'edit-device',
        component:EditdeviceComponent
      },
      {
        path:'approved-devices',
        component:ApproveddevicesComponent
      },
      {
        path:'maintenance-list',component:MaintenanceComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
