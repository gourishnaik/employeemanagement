import { Injectable } from '@angular/core';
import { LeaveManagement } from '../models/leave-management';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeaveManagementService {

  base_url ="http://localhost:3000/leave-management";
  
  constructor(private _http:HttpClient) { }

  //get request
  //getting all data from api
  getAllLeaveRecords(){
    return this._http.get<LeaveManagement>(this.base_url);
  }

  //post request
  saveLeaveRecords(data:any){
    return this._http.post<LeaveManagement>(this.base_url,data);
  }
  
  //get data using by id
  getLeaveRecordById(id:number){
    return this._http.get<LeaveManagement>(`${this.base_url}/${id}`);
  }

  //update request
  updateLeaveRecords(id:number, data:any){
    return this._http.put<LeaveManagement>(`${this.base_url}/${id}`,data);
  }
  
  //delete request
  deleteSelectedData(id:number){
    return this._http.delete<LeaveManagement>(`${this.base_url}/${id}`);
  }
 
}