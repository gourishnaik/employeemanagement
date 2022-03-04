import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { TimesheetService } from 'src/app/services/timesheet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timesheet-create',
  templateUrl: './timesheet-create.component.html',
  styleUrls: ['./timesheet-create.component.css']
})
export class TimesheetCreateComponent implements OnInit {

  constructor( private formBuilder:FormBuilder, private timesheet_service:TimesheetService, private _route:Router) { }
  emp_name_list:any = [];
  success_message:boolean = false;

  //drop-down employee list data
  employee_names:any[] = [
    "mukesh",
    "dipak",
    "nitin",
    "siya",
    "simran",
    "rihan",
    "moin"
  ]

  entry_form = this.formBuilder.group({
  
    //  '[0-9]{2}-[0-9]{2}-[0-9]{4}'
      date: ['', Validators.required],
      project: ['',[Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z][0-9]*)*$")]],
      emp_name: ['',[Validators.required]],
      description: ['',[Validators.required]],
      no_of_hrs: ['',[Validators.required, Validators.pattern('(0[0-9]|1[0-2]):([0-5][0-9])|([1-9])')]],
    });

    
  ngOnInit(): void {

     //getting employee name for showing drop down option list
     this.timesheet_service.getEmployeeWorkingTimeData().subscribe(
      (data)=>{
        this.emp_name_list=data;
      }
      );
  }

  
  saveFormData(){
    console.log(this.entry_form.value);
    this.timesheet_service.saveEmployeeWorkingData(this.entry_form.value).subscribe(
      (result)=>{
        //console.log(result);
        console.log("Done..!");
        this.success_message=true;
        setTimeout(() => {
          this.success_message = false;
           //redirect to view 
         this._route.navigate(['/view1'])
     }, 3000)
        //this.entry_form.reset();
       
      }
    );

  }

}
