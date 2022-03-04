import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
public signupForm! : FormGroup ;
submit = false;
  constructor(public formBuild : FormBuilder,private apis:UserService,
    private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuild.group({
     Name:['',Validators.compose([Validators.required,Validators.minLength(6)])],
     lastname:[''],
     emailid:['',[Validators.required,Validators.email],[this.MailExist.bind(this)]],
     password:['',[Validators.required,Validators.minLength(7)]],
     mobile:['',[Validators.required, Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$'),
     Validators.minLength(10),Validators.maxLength(10)]],
     designation:['',[Validators.required]]
    })
    
  }
onSubmit(data:any){
this.submit = true
if(this.signupForm.valid){
  this.apis.postUser(data).subscribe(res=>{
    this.signupForm.reset();
    this.submit=false;
    this.router.navigate(['login'])
    return res;
  })
}
}
getData(){
  return this.apis.getUser().subscribe(res=>{
    return res;
  })
}
get f(){
  return this.signupForm.controls;
}
// email verify
MailExist(control : FormControl):Promise<any> | Observable<any>{
  let promise = new Promise((resolve,rejects)=>{
    if(control.value === this.apis.emailids){
      resolve({
        isTaken : true
      })
    }else{
      resolve(null);
    }
  })
  return promise;
}
}
