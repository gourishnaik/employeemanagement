import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['firstname','lastname', 'emailid', 'mobile','password', 'designation','actions'];
  dataSource!: MatTableDataSource<any>;
  public allUser : any

  constructor(private apiServices:UserService, public dialog:MatDialog) { }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
this.getData();
  }
  // getusers
  getData(){
    this.apiServices.getUser().subscribe({
      next:(res:any)=>{
        this.dataSource           = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort      = this.sort
        this.allUser              = res;
      },error:(res:any)=>{
        alert(`error occurs ${res}`);
      }
    })
  }
  // update user
  updateUser(user:any){
    this.dialog.open(EditDialogComponent,{
      width:"40&%",
      data:user
    }).afterClosed().subscribe(res=>{
      this.getData();
      return res;
    })
  }

  // delete user
  deleteUser(user:any){
    this.dialog.open(ConfirmationComponent,{
      width:"40%",
      data:user
    }).afterClosed().subscribe(res=>{
      if(res){
        this.apiServices.deleteUser(user.id).subscribe(res=>{
          this.getData();
          return res;
        })
      }
      return res;
    })
  }
}
