import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { dashModel } from '../dashmodel';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-elist',
  templateUrl: './elist.component.html',
  styleUrls: ['./elist.component.css']
})
export class ElistComponent implements OnInit {

  exform!: FormGroup;
  dashModelObj: dashModel = new dashModel();
  isEdit = false;
  alluser :any;
  searchkey:any;
  totalLength:any;
  page:number= 1;


  userobj1={

  date         : '',
  firstname    : '',
  lastname     : '',
  email        :  '',
  password     : '',
  role         : '', 
  designation  : '',
  
}


  constructor(private  dashboardservice : DashboardService,
                private formbuilder: FormBuilder,) { }
               
  ngOnInit(): void {
  

    this.getLatestUser();

    this.exform = this.formbuilder.group({
      date    : ['',Validators.required,],
      firstname    : ['',Validators.required],
      lastname    : ['',Validators.required],
      'password': new FormControl(null,[Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,100})/),
        Validators.minLength(8)]),
        'email' : new FormControl(null, [Validators.required, Validators.email]),
      role         : ['',Validators.required],
      designation : ['',Validators.required],
     
    
 })







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
     

  deleteuser(user){
    if(confirm('Are you sure to delete record ?'))
    this.dashboardservice.deleteuser(user).subscribe(()=>{
    this.getLatestUser();
    alert("deleted sucessfully")
     })
     }
   
     edituser(user){
       this.isEdit=true;
       this.userobj1=user;
      
     }

    updateuser(){
      this.isEdit= !this.isEdit;
      this.dashboardservice.updateuser(this.userobj1).subscribe(()=>{
      this.getLatestUser()
      this.exform.reset();
      alert("updated sucessfully")
      })
      }
      



}
