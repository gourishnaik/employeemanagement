import { Component, OnInit } from '@angular/core'
import * as _moment from 'moment';
import { EmployeeService } from '../employee.service';
import { EmployeeModel } from '../employeemodel';
import { FormGroup,Validators,NgForm,FormControl,FormBuilder} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as $ from "jquery";
//declare var $:any;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  datepicker:any;
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
    private formbuilder: FormBuilder,
    private employeeservice : EmployeeService,
    private router :ActivatedRoute)    {}
    
   
           
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
  if(confirm('Are you sure to delete record ?'))
 this.employeeservice.deleteuser(user).subscribe(()=>{
 this.getLatestUser();
 alert("deleted sucessfully")
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
alert("updated sucessfully")
})
}






}

