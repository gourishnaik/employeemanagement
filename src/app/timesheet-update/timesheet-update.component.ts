import { Component, OnInit } from '@angular/core';
import { TimesheetService } from 'src/app/services/timesheet.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-timesheet-update',
  templateUrl: './timesheet-update.component.html',
  styleUrls: ['./timesheet-update.component.css']
})
export class TimesheetUpdateComponent implements OnInit {

  constructor(private timesheet_service: TimesheetService, private _route:Router, private url_param_get:ActivatedRoute, private formBuilder: FormBuilder) { }

  success_message:boolean = false;  
 
  emp_name_list:any = [];

  update_form = this.formBuilder.group({
    date: ['', Validators.required],  
    project: ['',[Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]],
    emp_name: ['',[Validators.required]],
    description: ['',[Validators.required]],
    no_of_hrs: ['',[Validators.required]],
   
  });



  updateFormData(){
    
    //console.log(this.update_form.value);
    this.timesheet_service.updateSelectedData(this.url_param_get.snapshot.params['id'], this.update_form.value).subscribe(
      (result)=>{

        this.success_message=true;
        setTimeout(() => {
          this.success_message = false;
          this._route.navigate(['/view1']);
     }, 3000)
      // 
      }  
    );
    
  }

  ngOnInit(): void {
  //getting id from url
    //console.log(this.url_param_get.snapshot.params['id']);
    this.timesheet_service.getDataById(this.url_param_get.snapshot.params['id']).subscribe(
      (result:any)=>{
        //fetch data into the form
        console.log("getting data from the update request");
        console.log(result);
          
        this.update_form = this.formBuilder.group({
          date: [result['date'],Validators.required],
          project: [result['project'],[Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z][0-9]*)*$")]],
          emp_name: [result['emp_name'],[Validators.required]],
          description: [result['description'],Validators.required],
          no_of_hrs:[result['no_of_hrs'],[Validators.required, Validators.pattern('(0[0-9]|1[0-2]):([0-5][0-9])|([1-9])')] ]
          
        });
        
      }
    );


      //drop down dynamic list setup
      this.timesheet_service.getEmployeeWorkingTimeData().subscribe(
        (result)=>{
          this.emp_name_list = result;
        }
      );

  }

}
