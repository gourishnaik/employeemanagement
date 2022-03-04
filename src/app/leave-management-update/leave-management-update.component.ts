import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeaveManagementService } from 'src/app/services/leave-management.service';
import { Router , ActivatedRoute } from "@angular/router"
import { CompareDates } from '../dialog/EndDtaeValidateDirectives';

@Component({
  selector: 'app-leave-management-update',
  templateUrl: './leave-management-update.component.html',
  styleUrls: ['./leave-management-update.component.css']
})
export class LeaveManagementUpdateComponent implements OnInit {

  constructor(private fb:FormBuilder,private url_param_get:ActivatedRoute, private _leaveService:LeaveManagementService, private _route:Router) { }
 
  success_msg : boolean = false;

  leaveManagement:any=[];

  leave_update_form = this.fb.group({
    username:['', [Validators.required, Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z][0-9]*)*$")] ] ,
    from_date:['', [Validators.required]],
    to_date:['',  [Validators.required,CompareDates]],
    reason:['',  [Validators.required, Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z][0-9]*)*$") ]],
    status:['', [Validators.required]]
  });

  public haserror = (controlName:string,error:string)=>{
    return this.leave_update_form.controls[controlName].hasError(error);
  }

  updateData(){
      //update code
      this._leaveService.updateLeaveRecords(this.url_param_get.snapshot.params['id'], this.leave_update_form.value).subscribe(
        (result)=>{
          this.success_msg=true;
          setTimeout(() => {
            this.success_msg = false;
            this._route.navigate(['leave-management/view']);
       }, 3000)
       
        },
        (error)=>{
          alert("server not responding");

        }
      );
  }


  ngOnInit(): void {

    //fetch record into the form
    //how to get id from the url
    //console.log(this.url_param_get.snapshot.params['id']);
   
    this._leaveService.getLeaveRecordById(this.url_param_get.snapshot.params['id']).subscribe(
      (result)=>{

        this.leave_update_form = this.fb.group({
          username: [result['username'],[Validators.required, Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z][0-9]*)*$")] ],
          from_date:  [result['from_date'],Validators.required],
          to_date:   [result['to_date'],[Validators.required,CompareDates]],
          reason:   [result['reason'],[Validators.required, Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z][0-9]*)*$")]],
          status:   [result['status'],Validators.required]
        });
      

      },
      (error)=>{
        alert("server not responding..")
      }
    );
  

  }

}
