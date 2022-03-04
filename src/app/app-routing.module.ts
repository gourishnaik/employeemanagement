import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimesheetComponent} from './timesheet/timesheet.component';
import {ListComponent} from './list/list.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { ElistComponent } from './elist/elist.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { LeaveComponent } from './leave/leave.component';
import { FormsComponent } from './forms/forms.component';
import { LoginComponent } from './task2/login/login.component';
import { HomeComponent } from './task2/home/home.component';
import { SignupComponent } from './task2/signup/signup.component';
import { UsersComponent } from './task2/users/users.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { NewpageComponent } from './newpage/newpage.component';
import { LeaveManagementCreateComponent } from './leave-management-create/leave-management-create.component';
import { LeaveManagementUpdateComponent } from './leave-management-update/leave-management-update.component';
import { LeaveManagementViewComponent } from './leave-management-view/leave-management-view.component';
import { UserdataviewComponent } from './userdataview/userdataview.component';
import { UserViewComponent } from './user-view/user-view.component';
import { TimesheetCreateComponent } from './timesheet-create/timesheet-create.component';
import { TimesheetUpdateComponent } from './timesheet-update/timesheet-update.component';
import { TimesheetViewComponent } from './timesheet-view/timesheet-view.component';
import { AuthService } from './task2/shared/auth.service';
import { AuthGuard } from './task2/shared/auth.guard';
const routes: Routes = [
  {path:'timesheet',component: TimesheetComponent},
  {path:'list',component:ListComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'elist',component:ElistComponent},
  {path:"applyLeave",component:ApplyLeaveComponent},
  {path:'viewLeave',component:LeaveComponent},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},  
  {path:"users",component:UsersComponent,canActivate:[AuthGuard]}, 
  {path:"signup",component:SignupComponent },
  {path:"",component:MainpageComponent },
  {path:"create",component:CreateComponent},
  { path:'view',component: ViewComponent},
  {path:'newpage',component:NewpageComponent},
  { path:'dataview',component: UserdataviewComponent},
  { path:'usercreate',component:UserViewComponent},

  {
    path: "leave-management/create",
    component:LeaveManagementCreateComponent
  },
  {
    path: "leave-management/edit/:id",
    component:LeaveManagementUpdateComponent
  },
  {
    path: "leave-management/view",
    component:LeaveManagementViewComponent
  },
 // timesheet - module
 {
  path:"view1",
  component: TimesheetViewComponent
},

{
  path:"create1",
  component: TimesheetCreateComponent
},
{
  
  path:"edit/:id",
  component: TimesheetUpdateComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Routingcomponents =[TimesheetComponent,ListComponent]