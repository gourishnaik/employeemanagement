import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder,FormControl,FormGroup,ValidationErrors,Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
  public editForm! : FormGroup ;
  submit = false;
  emailValidationApi!   :any;

  constructor(private formBuild : FormBuilder,
    @Inject(MAT_DIALOG_DATA)public editData:any,
    private dialogref :MatDialogRef<EditDialogComponent> ,
    private services:UserService,
    private https:HttpClient) { }

  ngOnInit(): void {
    this.editForm = this.formBuild.group({
      Name:['',Validators.compose([Validators.required,Validators.minLength(6)])],
      lastname:[''],
      emailid:['',[Validators.required,Validators.email,]],
      password:['',[Validators.required,Validators.minLength(7)]],
      mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      designation:['',[Validators.required]]
     })
     if(this.editData){
       this.editForm.controls['Name'].setValue(this.editData.Name);
       this.editForm.controls['lastname'].setValue(this.editData.lastname);
       this.editForm.controls['password'].setValue(this.editData.password);
       this.editForm.controls['emailid'].setValue(this.editData.emailid);
       this.editForm.controls['mobile'].setValue(this.editData.mobile);
       this.editForm.controls['designation'].setValue(this.editData.designation);
     }
  }
  get f(){
    return this.editForm.controls;
  }
  updateData(data:any){

    if(this.editForm.valid && this.editData){
    this.services.updateUser(data,this.editData.id).subscribe({
      next:(res:any)=>{
          alert('user updated successfully');
          this.editForm.reset();
          this.dialogref.close();
     
      },error:(res:any)=>{
        alert (`something error occured : ${res}`);
      }
    })
  }}
  closeDialog(){
    this.dialogref.close();
  }
  // email validation
// async validation
isMailExist(control:AbstractControl): Promise<any>|Observable<any> {
  let promise = new Promise ((resolve,rejects)=>{
    setTimeout(() => {
      if(control.value === this.services.emailids ){
        resolve({mailIsRestricted : true})
      }else{
        resolve(null)
      }
    },1000);
  });
  return promise

}
// second verify method email
// isMailExist(control:FormControl):any{
//   let promise:any = new Promise((resolve)=>{
//     if(control.value === this.services.emailids){
//       return {
//         isTaken : true
//       }
//     }
//     return promise;
//   })
// }

// }
}
