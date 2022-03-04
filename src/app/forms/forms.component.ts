import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from '../task2/user.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
 public filterData! :any;
  submission!       :any;
  submit = false;
  constructor(public dates:DatePipe,private http:HttpClient, private fb:FormBuilder,private services : UserService ) { }
mailForm!: FormGroup
  ngOnInit(): void {
 this.submission = this.array;
this.mailForm = this.fb.group({
  mailid:['',[Validators.required,Validators.email,this.isMailExist.bind(this)]]
})
 
  }
  submitForm(val:any){
    this.submit= true;
    if(this.mailForm.valid){
      console.log(val);
    }
  }
// async validation
// isMailExist(control:AbstractControl): any {
// const EmailValues = this.http.get<any>("http://localhost:5000/login_modules").subscribe(res=>{
//   const Values = res.find((mail:any)=>{
//     return mail.emailid;
//   })
// })
// if(control.value === EmailValues){
// return {
//   isTaken : true
// }
// }
isMailExist(control:AbstractControl): any {
  const EmailValues = 'madan@gmail.com'
  if(control.value === EmailValues){
  return {
    isTaken : true
  }
  }
}





  get f(){
    return this.mailForm.controls;
  }
  
  public array = [
    {
      name:'madan kumar',
      date:'2022-12-01',
      designation : 'software developer'
    },
    {
      name:'jeevarishi',
      date:'2022-12-25',
      designation : 'back-end developer'
    },
    {
      name:'mugilan',
      date:'2022-11-25',
      designation : 'front-end developer'
    },
    {
      name:'madan kumar',
      date:'2022-10-20',
      designation : 'software developer'
    }
  ]

}
