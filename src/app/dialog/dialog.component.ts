import { Component, OnInit,Inject } from '@angular/core';
import { AbstractControl, AsyncValidator, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ApisService } from '../apis.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CompareDatesEnd, NameValidates } from './EndDtaeValidateDirectives';
import {  Router} from '@angular/router';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
submit            = false;
content           = "apply";
actionBtn:string  = "save";
fromDateRef!      :any;
submission!       :any;
applyLeave!       :FormGroup;
public  date      = new Date() ;

  constructor(private formbuild:FormBuilder,private url:ApisService,
    @Inject(MAT_DIALOG_DATA) public editdata: any,
    private dialogRef : MatDialogRef<DialogComponent>,
    public Route:Router) { 
      
    }

  ngOnInit(): void {
    
    this.applyLeave = this.formbuild.group({
      username  :['',Validators.compose([Validators.required,NameValidates,Validators.minLength(6)])],
      fromDate : ['',Validators.required],
      toDate   :['',[Validators.required,CompareDatesEnd]],
      reason:['',Validators.compose([
        Validators.required,
        Validators.maxLength(30)
      ])],
      status:['',Validators.required],
    }
     )
   

if(this.editdata){
  this.content    = "Edit";
  this.actionBtn  = "update";
  this.applyLeave.controls['username'].setValue(this.editdata.username),
  this.applyLeave.controls['fromDate'].setValue(this.editdata.fromDate),
  this.applyLeave.controls['toDate'].setValue(this.editdata.toDate),
  this.applyLeave.controls['reason'].setValue(this.editdata.reason),
  this.applyLeave.controls['status'].setValue(this.editdata.status)
}
  }

  saveData(val:any){
    this.submit = true;
      if(!this.editdata && this.applyLeave.valid  && this.applyLeave.controls['fromDate'].value <= this.applyLeave.controls['toDate'].value ){
        this.url.postData(val).subscribe({
          next:(res:any)=>{
            this.applyLeave.reset();
            this.dialogRef.close();
            this.submit= false;
            this.Route.navigate(['/viewLeave']);
            return res;
          }
        })
      
    }else{
      this.updateData();
    }

  }
  // edited data saving
  updateData(){
    this.submit = true;
    if(this.editdata && this.applyLeave.valid  && this.applyLeave.controls['fromDate'].value <= this.applyLeave.controls['toDate'].value ){
    this.url.putData(this.applyLeave.value,this.editdata.id).subscribe({
      next:(res:any)=>{
        alert('updated sucessfully');
        this.applyLeave.reset();
        this.dialogRef.close();
        this.submit = false;
      },error:()=>{
        alert('something went wrong try sometime later')
      }
    })}
  }

// close 
onClose(){
  this.dialogRef.close();
}
// validation purpose
get f(){
  return this.applyLeave.controls;
}
// validate for date purpose
get dates(){
  return this.applyLeave.get('toDate');
}



}