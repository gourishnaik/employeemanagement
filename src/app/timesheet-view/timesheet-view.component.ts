import { Component, OnInit } from '@angular/core';
import { TimesheetService } from '../services/timesheet.service'

@Component({
  selector: 'app-timesheet-view',
  templateUrl: './timesheet-view.component.html',
  styleUrls: ['./timesheet-view.component.css']
})
export class TimesheetViewComponent implements OnInit {

  constructor(private timesheet_service: TimesheetService) { }
  
  emp_timesheet:any = [];
  //getting timesheet data from service class

  ngOnInit(): void {
    this.timesheet_service.getEmployeeWorkingTimeData().subscribe(
      (data)=>{
        console.log("testing")
        console.log(data);
        this.emp_timesheet=data;
      }
      );
  }

  delete_success:boolean = false; 
  //Deleting data from the table
  deleteSelectedData(id:any){
    if(confirm('Are you sure to delete record ?'))
    //console.log("selected id: "+data);
    this.timesheet_service.deleteSelectedData(id).subscribe(
      (res)=>{
        alert("deleted sucessfully")
        //refreshing the page
        this.ngOnInit();

        //display error msg
        this.delete_success=true;
        setTimeout(() => {
          this.delete_success = false;
          
     }, 3000)
      // 

      }
    );
  }

}
