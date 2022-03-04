import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, of, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public apiUrl = "http://localhost:3000/login_modules/";
  constructor(private http:HttpClient) { 
  }
  public emailids = this.http.get<any>("http://localhost:3000/login_modules").subscribe(res=>{
    const value = res.find((mail:any)=>{
      return mail.emailid
    })
  })
  // create user via this
  postUser(data:any){
    return this.http.post(this.apiUrl,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  // get the user via this
  getUser(){
    return this.http.get(this.apiUrl).pipe(map((res:any)=>{
      return res;
    }))
  }

// validation
getEmailValidate(){

}
// delete user via this
deleteUser(id:number){
  return this.http.delete(this.apiUrl+id).pipe(map((res:any)=>{
    return res;
  }))
}
// post user details via this
updateUser(data:any,id:number){
  return this.http.put(this.apiUrl+id,data).pipe(map((res:any)=>{
    return res;
  }))
}
}
