import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Timesheet } from '../models/timesheet';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {
  constructor(private _http : HttpClient) {}

  //api base url
   base_url = "http://localhost:3000/timesheet";

   //hendling get request
   getEmployeeWorkingTimeData(){
      return this._http.get<Timesheet>(this.base_url);
   }

   //handling post request 
   //saving data from the form
   saveEmployeeWorkingData(data : any){
     return this._http.post<Timesheet>(this.base_url, data);
   }

   //delete request
   deleteSelectedData(id:number){
     return this._http.delete<Timesheet>(`${this.base_url}/${id}`);
   }

   //getting employee timesheet data with the help of id
   getDataById(id:number){
     return this._http.get<Timesheet>(`${this.base_url}/${id}`);
   }
   
   //update request
   updateSelectedData(id:number, data:any){
      return this._http.put<Timesheet>(`${this.base_url}/${id}`,data);
   }
}
