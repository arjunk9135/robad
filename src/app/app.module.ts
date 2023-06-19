import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import {Component} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {NgFor} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';

import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { SamplechartComponent } from './samplechart/samplechart.component';
import { SamplecomponentComponent } from './samplecomponent/samplecomponent.component';
import { SamplecomponentnewComponent } from './samplecomponentnew/samplecomponentnew.component';
import { PiechartComponent } from './piechart/piechart.component';
import { LinechartComponent } from './linechart/linechart.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ChartinsertComponent } from './chartinsert/chartinsert.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DevicesComponent } from './devices/devices.component';
import { NewdeviceComponent } from './newdevice/newdevice.component';
import { EditdeviceComponent } from './editdevice/editdevice.component';
import { QrcodescannerComponent } from './qrcodescanner/qrcodescanner.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import {MatExpansionModule} from '@angular/material/expansion';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
import { ReportComponent } from './report/report.component';
import { ApproveddevicesComponent } from './approveddevices/approveddevices.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ManagertabComponent } from './managertab/managertab.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    SamplechartComponent,
    SamplecomponentComponent,
    SamplecomponentnewComponent,
    PiechartComponent,
    LinechartComponent,
    AdminComponent,
    AdmindashboardComponent,
    ChartinsertComponent,
    SignupComponent,
    LoginComponent,
    DevicesComponent,
    NewdeviceComponent,
    EditdeviceComponent,
    QrcodescannerComponent,
    ReportComponent,
    ApproveddevicesComponent,
    MaintenanceComponent,
    ManagertabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatCardModule,
    ZXingScannerModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    PanelMenuModule,
    MatExpansionModule,
    ProgressBarModule,
    ToastModule,
    ButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule
    
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
