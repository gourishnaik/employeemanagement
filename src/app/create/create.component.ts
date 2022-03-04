import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Leave } from '../model/leave';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  leave!: Leave[];
  leaveCal = new Leave();
  public leaveCalenderForm!:FormGroup;
  public leaveCalenderSearchForm!:FormGroup;
  public leaveCalenderModalForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
        ///////////////////formdata/////////////
        this.leaveCalenderForm = this.formBuilder.group({
          year:['',[Validators.required,Validators.maxLength(4),Validators.minLength(4)]],
          date:['',Validators.required],
          reason:['',[Validators.required, Validators.maxLength(60)]],
          type:['',Validators.required]
        })
        //////////////////////////modaldata/////////////////
        this.leaveCalenderModalForm = this.formBuilder.group({
          year:['',[Validators.required,Validators.maxLength(4),Validators.minLength(4)]],
          date:['',Validators.required],
          reason:['',[Validators.required, Validators.maxLength(60)]],
          type:['',Validators.required]
        })
        //////////////////////searchdata//////////////////
        this.leaveCalenderSearchForm = this.formBuilder.group({
          year:[''],
        })
       this.gethomeData();
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.leaveCalenderForm.controls[controlName].hasError(errorName);
  }
  view(){
    return this.router.navigate(['/view']);
  }
  leaveCalender(){
    if(this.leaveCalenderForm.valid){
    this.http.post<any>("http://localhost:3000/userdata",this.leaveCalenderForm.value)
    .subscribe(res=>{
      alert("Update successfull!!");
      this.leaveCalenderForm.reset();
      this.gethomeData();
      this.router.navigate(['view']);
    },err=>{
      alert("Something went wrong!!");
    })
  }
  }


  gethomeData(){
    this.http.get<any>("http://localhost:3000/userdata")
    .subscribe(res=>{
      this.leave=res;
    })
  }

}

