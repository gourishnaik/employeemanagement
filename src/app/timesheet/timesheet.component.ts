import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,NgForm,FormControl,FormBuilder} from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import * as _moment from 'moment';
import { EmployeeModel } from '../employeemodel';
import { EmployeeService } from '../employee.service';
import {ActivatedRoute} from '@angular/router';


  @Component({
    selector: 'app-timesheet',
    templateUrl: './timesheet.component.html',
    styleUrls: ['./timesheet.component.css']
  })
  export class TimesheetComponent implements OnInit {

    minDate: Date;
    maxDate: Date;
    employeeform!:FormGroup;
    employeeModelObj: EmployeeModel = new EmployeeModel();
    alluser :any;
    isEdit = false;
    searchkey:any;
    userobj={
      fromdate    :'',
      projectname :'',
      username    :'',
      description :'',
      fromtime    :'',
    }
   constructor(
      private dateAdapter: DateAdapter<Date>,
      private formbuilder: FormBuilder,
      private employeeservice : EmployeeService,
      private router:ActivatedRoute,
      )
     { 
     this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy(dateformat)
      const currentYear = new Date().getFullYear()
      this.minDate = new Date(currentYear - 0, 1, 0);
       this.maxDate = new Date(currentYear + 1, 11, 31)
       }

               totalLength:any;
               page:number= 1;
               

      ngOnInit(): void {
        this.getLatestUser();
    this.employeeform = this.formbuilder.group({
      fromdate    : ['',Validators.required,],
      projectname : ['',Validators.required],
      username    : ['',Validators.required],
      description : ['',Validators.required],
      fromtime    : ['',Validators.required],
    
 })
    }

   



  adduser(){
 this.employeeModelObj.fromdate    =   this.employeeform.value.fromdate;
 this.employeeModelObj.Todate      =   this.employeeform.value.Todate;
 this.employeeModelObj.projectname =   this.employeeform.value.projectname;
 this.employeeModelObj.username    =   this.employeeform.value.username;
 this.employeeModelObj.description =   this.employeeform.value.description;
 this.employeeModelObj.fromtime    =   this.employeeform.value.fromtime;
  

 this.employeeform.reset();


this.employeeservice.createuser(this.employeeModelObj)
.subscribe(res=>{
  alert("Added sucessfully")
  this.getLatestUser();
})
    }
    
    getLatestUser(){
    this.employeeservice.getAlluser()
    .subscribe(res=>{
    this.alluser = res
})
  }
  
  deleteuser(user){

   this.employeeservice.deleteuser(user).subscribe(()=>{
  this.getLatestUser();


    })



    }

    edituser(user){
      this.isEdit=true;
      this.userobj=user;
    }

updateuser(){
  this.isEdit= !this.isEdit;
  this.employeeservice.updateuser(this.userobj).subscribe(()=>{
  this.getLatestUser()
  this.employeeform.reset();
  })
}





 




  }

  