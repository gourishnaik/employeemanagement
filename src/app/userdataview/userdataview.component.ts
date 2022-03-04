import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-userdataview',
  templateUrl: './userdataview.component.html',
  styleUrls: ['./userdataview.component.css']
})
export class UserdataviewComponent implements OnInit {
  user!: User[];
  userdatabase = new User();
  public usermodaldataForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.usermodaldataForm = this.formBuilder.group({
      fname:['',[Validators.required,Validators.maxLength(15),Validators.minLength(3)]],
      lname:['',[Validators.maxLength(15),Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]],
      role:['',[Validators.required,Validators.maxLength(30),Validators.minLength(5)]],
      designation:['',[Validators.required,Validators.maxLength(30),Validators.minLength(5)]],
      doj:['',Validators.required],
    })
    this.gethomeData();
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.usermodaldataForm.controls[controlName].hasError(errorName);
  }

  createPage(){
    this.usermodaldataForm.reset();
    return this.router.navigate(['/usercreate']);
 }
 gethomeData(){
  this.http.get<any>("http://localhost:3000/userdb")
  .subscribe(res=>{
    this.user=res;
  })
}
editData(item:any,id:number){
  this.userdatabase.id = item.id;
  this.usermodaldataForm.controls['fname'].setValue(item.fname);
  this.usermodaldataForm.controls['lname'].setValue(item.lname);
  this.usermodaldataForm.controls['email'].setValue(item.email);
  this.usermodaldataForm.controls['password'].setValue(item.password);
  this.usermodaldataForm.controls['role'].setValue(item.role);
  this.usermodaldataForm.controls['designation'].setValue(item.designation);
  this.usermodaldataForm.controls['doj'].setValue(item.doj);

  }

  updateUserData(leaveCal:any){
    this.userdatabase.fname = this.usermodaldataForm.value.fname;
    this.userdatabase.lname = this.usermodaldataForm.value.lname;
    this.userdatabase.email = this.usermodaldataForm.value.email;
    this.userdatabase.password = this.usermodaldataForm.value.password;
    this.userdatabase.role = this.usermodaldataForm.value.role;
    this.userdatabase.designation = this.usermodaldataForm.value.designation;
    this.userdatabase.doj = this.usermodaldataForm.value.doj;

    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(leaveCal);
    console.log(body);
    console.log("Form data",this.usermodaldataForm.value);
    if(this.usermodaldataForm.valid){
    this.http.put<any>("http://localhost:3000/userdb/"+this.userdatabase.id,this.usermodaldataForm.value)
    .subscribe(res=>{      
      alert("Successfully updated data!!!");
      this.gethomeData();
      this.usermodaldataForm.reset();
    },err=>{
      alert("Error in getting data update!!!");
    })
  }
  else{
    alert("Please Update Valid data!!")
  }
  }
  deleteData(item:any,id:number){
    if(confirm('Are you sure to delete record ?'))
    this.http.delete<any>("http://localhost:3000/userdb/"+id,item.id)
    .subscribe(res=>{
    alert("data delete");
    this.gethomeData();
    },err=>{
      alert("Something went wrong!!");
    })
  }
}
