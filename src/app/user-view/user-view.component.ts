import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  user!: User[];
  userdatabase = new User();

  public userForm!:FormGroup;
  
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      fname:['',[Validators.required,Validators.maxLength(15),Validators.minLength(3)]],
      lname:['',[Validators.maxLength(15),Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]],
      role:['',[Validators.required,Validators.maxLength(30),Validators.minLength(5)]],
      designation:['',[Validators.required,Validators.maxLength(30),Validators.minLength(5)]],
      doj:['',Validators.required],
    })
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.userForm.controls[controlName].hasError(errorName);
  }

  userFormdata(){
    if(this.userForm.valid){
    console.log("Userformdata",this.userForm.value);
    this.http.post<any>("http://localhost:3000/userdb",this.userForm.value)
    .subscribe(res=>{

      alert("Update successfull!!");
      this.userForm.reset();
      this.gethomeData();
      this.router.navigate(['/dataview']);
    },err=>{
      alert("Something went wrong!!");
    })
  }
  }
  gethomeData(){
    this.http.get<any>("http://localhost:3000/userdb")
    .subscribe(res=>{
      this.userdatabase=res;
    })
  }
  view(){
    return this.router.navigate(['/dataview']);
  }
}
