import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {

  constructor( private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  // get leave data from user
openDialog(){
  this.dialog.open(DialogComponent,{

    panelClass:"full-width-dialog"
  }).afterClosed().subscribe((res:any)=>{
    // this.GetDtata();
    return res;

  })
}
}
