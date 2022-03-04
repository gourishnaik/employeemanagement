import { Component, OnInit,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)public data:any,public dialogref:MatDialogRef<ConfirmDialogComponent>) { }

  ngOnInit(): void {
  }
  closedialog(){
    this.dialogref.close();
      }
}