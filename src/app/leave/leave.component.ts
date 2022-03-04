import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ApisService } from '../apis.service';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogserviceService } from '../dialogservice.service';
import { Datamodel } from './table-model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
  displayedColumns : string[] = ['id', 'username', 'fromdate', 'todate','reason','dateofsubmission','status','actions'];
  dataSource!      : MatTableDataSource<Datamodel>;
  dateSubmit!       :Date;
  date              = new Date()
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialogservice : DialogserviceService,
              private apis:ApisService,
              private dialog:MatDialog,
              private routes : Router) { }

  ngOnInit(): void {
    this.GetDtata()
    
}
// get leave data
GetDtata(){
  this.apis.getData().subscribe({
    next:(res:any)=>{
      this.dataSource           = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort      = this.sort;
      this.dateSubmit           = new Date();
      this.dataSource.data = res;
    },
    error:(res:any)=>{
      alert('error while fetchong data');
      return res;
    }
  })
}

// filter method
applyFilter(event: any) {
   const filterValue      = (event.target as HTMLInputElement).value;
    
    this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}


// delete leave
deleteData(row:any){
  this.dialogservice.openConfirmDialog(row).afterClosed().subscribe(res=>{
    if(res){
      this.apis.deleteData(row.id).subscribe(res=>{
        this.GetDtata();
        return res;
      })  
    }
  })
  }
editData(user:any){
  this.dialog.open(DialogComponent,{
    panelClass:'edit-dialog',
    data:user
  }).afterClosed().subscribe(res=>{
    this.GetDtata();
    return res;
  })
}
// create navigate
createLeave(){
  this.routes.navigate(['/applyLeave'])
}
}