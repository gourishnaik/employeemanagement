import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Leave } from '../model/leave';
import { FormBuilder, FormGroup,Validators  } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  leave!: Leave[];
  leaveCal = new Leave();
  public leaveCalenderSearchForm!:FormGroup;
  public leaveCalenderModalForm!:FormGroup;
  data!:string;

  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }


  ngOnInit(): void {
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
    return this.leaveCalenderModalForm.controls[controlName].hasError(errorName);
  }

createPage(){
   return this.router.navigate(['/create']);
}


  gethomeData(){
    this.http.get<any>("http://localhost:3000/userdata")
    .subscribe(res=>{
      this.leave=res;
    })
  }

editData(item:any,id:number){
  this.leaveCal.id = item.id;
  this.leaveCalenderModalForm.controls['year'].setValue(item.year);
  this.leaveCalenderModalForm.controls['date'].setValue(item.date);
  this.leaveCalenderModalForm.controls['reason'].setValue(item.reason);
  this.leaveCalenderModalForm.controls['type'].setValue(item.type);
  }

  updateUserData(leaveCal:any){
    this.leaveCal.year = this.leaveCalenderModalForm.value.year;
    this.leaveCal.date = this.leaveCalenderModalForm.value.date;
    this.leaveCal.reason = this.leaveCalenderModalForm.value.reason;
    this.leaveCal.type = this.leaveCalenderModalForm.value.type;
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(leaveCal);
    console.log(body);
    console.log("Form data",this.leaveCalenderModalForm.value);
    if(this.leaveCalenderModalForm.valid){
    this.http.put<any>("http://localhost:3000/userdata/"+this.leaveCal.id,this.leaveCalenderModalForm.value)
    .subscribe(res=>{      
      alert("Successfully updated data!!!");
      this.gethomeData();
      this.leaveCalenderModalForm.reset();
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
    this.http.delete<any>("http://localhost:3000/userdata/"+id,item.id)
    .subscribe(res=>{
    alert("data delete sucessfully");
    this.gethomeData();
    },err=>{
      alert("Something went wrong!!");
    })
  }

}
