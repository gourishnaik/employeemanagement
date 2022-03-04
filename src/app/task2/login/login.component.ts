import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public LoginForm! : FormGroup;
 submitForm = false;

  constructor(public FB:FormBuilder,private routes:Router, private http:HttpClient, private apiservice:UserService) { }

  ngOnInit(): void {
this.LoginForm = this.FB.group({
  emailid : ['',[Validators.required,Validators.email]],
  password :['',Validators.required]
})
  }

  onSubmit(){
    this.submitForm = true
    if(this.LoginForm.invalid){
      return ;
    }else{
      this.http.get<any>(this.apiservice.apiUrl).subscribe(res=>{
        const userLog = res.find((a:any)=>{
          return a.email === this.LoginForm.value.email && a.password === this.LoginForm.value.password;
        });
        if(userLog){

          this.LoginForm.reset();
          this.routes.navigate(['users']);
       
          localStorage.setItem('token',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c")

          this.LoginForm.value.emailid? localStorage.setItem('usertype','employee'):''


        }
        else{
          alert('user not found')
        }
      },error=>{
        alert(`something went wrong ${error}`);
      })
    }
  }
  get f(){
   return this.LoginForm.controls
  }
}
