import { Component, OnInit } from '@angular/core';
import { LeaveManagementService } from 'src/app/services/leave-management.service';
import { LeaveManagement } from 'src/app/models/leave-management';

@Component({
  selector: 'app-leave-management-view',
  templateUrl: './leave-management-view.component.html',
  styleUrls: ['./leave-management-view.component.css']
})
export class LeaveManagementViewComponent implements OnInit {

  constructor( private _leaveServices:LeaveManagementService, ) { }
  
  leaveManagement:any=[];
  
  displayedColumns: string[] = ['username','from_date', 'to_date', 'reason', 'status','actions'];
 
  ngOnInit(): any {
  //getting all leave records using services
     this._leaveServices.getAllLeaveRecords().subscribe(
       (result)=>{
         console.log(result); //working
          this.leaveManagement = result;       
       },
       (error)=>{
         alert("server not available");
       }
     );
  }


  delete_success:boolean = false; 
  //Deleting data from the table
  deleteSelectedData(id:any){
    if(confirm('Are you sure to delete record ?'))
    this._leaveServices.deleteSelectedData(id).subscribe(
      (res)=>{
        //console.log("Successfully deleted");
        //refreshing the page
        alert("deleted sucessfully")
        this.ngOnInit();

        //display error msg
       this.delete_success=true;
        setTimeout(() => {
          this.delete_success = false;
     }, 3000)

      }
    );
  }
  




}
