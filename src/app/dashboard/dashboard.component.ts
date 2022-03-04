import { Component, OnInit } from '@angular/core';
import { dashModel } from '../dashmodel';
import { DateAdapter } from '@angular/material/core';
import { DashboardService } from '../dashboard.service';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
import * as _moment from 'moment';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  exform!: FormGroup;
  minDate!: Date;
  maxDate!: Date;
  dashModelObj: dashModel = new dashModel();
  isEdit = false;
  alluser :any;
  userobj1={

    date         : '',
    firstname    : '',
    lastname     : '',
    email        :  '',
    password     : '',
    role         : '', 
    designation  : '',
    
  }
  constructor( 
                private formbuilder: FormBuilder,
                private  dashboardservice : DashboardService,
                private dateAdapter: DateAdapter<Date>,
    ) {
      this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy(dateformat)
      const currentYear = new Date().getFullYear()
      this.minDate = new Date(currentYear - 0, 1, 0);
       this.maxDate = new Date(currentYear + 1, 11, 31)
   


   }
 
    
  ngOnInit(): void {
    this.getLatestUser();
    this.exform = this.formbuilder.group({
      date    : ['',Validators.required,],
      firstname    : ['',Validators.required],
      lastname    : ['',Validators.required],
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      role         : ['',Validators.required],
      designation : ['',Validators.required],
      'password': new FormControl(null,[Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,100})/),
        Validators.minLength(8)]),
     
    
 })
    }
    public hasError = (controlName: string, errorName: string) =>{
      return this.exform.controls[controlName].hasError(errorName);
    }
  



    adduser(){
     this.dashModelObj.date       = this.exform.value.date;
     this.dashModelObj.firstname  = this.exform.value.firstname;
     this.dashModelObj.lastname   = this.exform.value.lastname;
     this.dashModelObj.email      = this.exform.value.email;
     this.dashModelObj.password   = this.exform.value.password;
     this.dashModelObj.role       = this.exform.value.role;
     this.dashModelObj.designation = this.exform.value.designation


     this.exform.reset();

     this.dashboardservice.createuser(this.dashModelObj)
     .subscribe(res=>{
       alert("Added sucessfully")
       this.getLatestUser();
     })
         }

         getLatestUser(){
          this.dashboardservice.getAlluser()
          .subscribe(res=>{
          this.alluser = res
      })
        }

        deleteuser(users){
          this.dashboardservice.deleteuser(users).subscribe(()=>{
          this.getLatestUser();
           })
           }
           edituser(users){
            this.isEdit=true;
            this.userobj1=users;
          }

       

    }





  




