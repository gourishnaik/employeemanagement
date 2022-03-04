import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DialogComponent } from './dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogserviceService {

  constructor(private dialog : MatDialog) { }
  
  openConfirmDialog(row:any){
    return this.dialog.open(ConfirmDialogComponent,{
      width:'390px',
      data:row,
      panelClass:'confirm-dialog-container',
      disableClose:true
    })
  }

}