import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent,} from './app.component';
import { AppRoutingModule,Routingcomponents} from './app-routing.module';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import{MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import{ FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { TimesheetModule } from './timesheet/timesheet.module';
import{HttpClientModule} from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule}from  'ngx-pagination';
import { MatTableModule } from '@angular/material/table';
import { FilterPipeModule } from 'ngx-filter-pipe';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ListComponent } from './list/list.component';
import { TimesheetCreateComponent } from './timesheet-create/timesheet-create.component';
import { TimesheetUpdateComponent } from './timesheet-update/timesheet-update.component';
import { TimesheetViewComponent } from './timesheet-view/timesheet-view.component';
import { LeaveManagementCreateComponent } from './leave-management-create/leave-management-create.component';
import { LeaveManagementUpdateComponent } from './leave-management-update/leave-management-update.component';
import { LeaveManagementViewComponent } from './leave-management-view/leave-management-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ElistComponent } from './elist/elist.component';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DialogComponent } from './dialog/dialog.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { DatePipe } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { LeaveComponent } from './leave/leave.component';
import { FormsComponent } from './forms/forms.component';
import { LoginComponent } from './task2/login/login.component';
import { SignupComponent } from './task2/signup/signup.component';
import { HomeComponent } from './task2/home/home.component';
import { UsersComponent } from './task2/users/users.component';
import { EditDialogComponent } from './task2/edit-dialog/edit-dialog.component';
import { ConfirmationComponent } from './task2/confirmation/confirmation.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { NewpageComponent } from './newpage/newpage.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { UserdataviewComponent } from './userdataview/userdataview.component';
import { UserViewComponent } from './user-view/user-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
  TimesheetComponent,
  DialogComponent,
  CreateComponent,
  Routingcomponents,
  ViewComponent,
  SignupComponent,
  UserdataviewComponent,
  ConfirmationComponent,
  EditDialogComponent,
  HomeComponent,
  UsersComponent,
  UserViewComponent,
  ConfirmDialogComponent,
  LoginComponent,
  DashboardComponent,
  FormsComponent,
  ApplyLeaveComponent,
  ElistComponent,
  MatConfirmDialogComponent,
  LeaveComponent,
  MainpageComponent,
  NewpageComponent,
  LeaveManagementCreateComponent,
  LeaveManagementUpdateComponent,
  LeaveManagementViewComponent,
  TimesheetUpdateComponent,
  TimesheetCreateComponent,
  TimesheetViewComponent


  ],
  imports: [
    TimesheetModule,
    BrowserModule,
    AppRoutingModule,
   BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    FilterPipeModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    HttpClientModule,
    MaterialModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatMomentDateModule,
    Ng2SearchPipeModule,
    MatSelectModule,
    MatSidenavModule,
    NgxPaginationModule,
    NgxMaterialTimepickerModule,
    MatTableModule,
    MatBadgeModule,
    MatListModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule

    
  ],






  providers: [ 
    EmployeeService,DatePipe,
  ],
  bootstrap: [AppComponent],
  entryComponents:[MatConfirmDialogComponent,ConfirmDialogComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule {
  showFiller = false;
 }