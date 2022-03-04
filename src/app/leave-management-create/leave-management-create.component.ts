import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeaveManagementService } from 'src/app/services/leave-management.service';
import { Router } from "@angular/router"
import { CompareDates } from '../dialog/EndDtaeValidateDirectives';

@Component({
  selector: 'app-leave-management-create',
  templateUrl: './leave-management-create.component.html',
  styleUrls: ['./leave-management-create.component.css']
})
export class LeaveManagementCreateComponent implements OnInit {

  constructor(private fb:FormBuilder, private _leaveService:LeaveManagementService, private _route:Router) { }

  success_msg : boolean = false;

  leave_form = this.fb.group({
    username:['', [Validators.required, Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z][0-9]*)*$")] ] ,
    from_date:['', [Validators.required]],
    to_date:['',  [Validators.required,CompareDates]],
    reason:['',  [Validators.required, Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z][0-9]*)*$") ]],
    status:['', [Validators.required]]
  });


  ngOnInit(): void {
  }

  public haserror = (controlName:string,error:string)=>{
    return this.leave_form.controls[controlName].hasError(error);
  }

  submitData(){
      //console.log(this.leave_form.value)
      this._leaveService.saveLeaveRecords(this.leave_form.value).subscribe(
        (result)=>{
          //alert("successfully record intserted!");
          // success message
          this.success_msg = true;
          setTimeout(() => {
            this.success_msg = false;
             //redirect to view 
           this._route.navigate(['/leave-management/view'])
       }, 3000)
          //this.entry_form.reset(
         


        },
        (error)=>{
          alert("server response error");
        }
      );


  }


}
