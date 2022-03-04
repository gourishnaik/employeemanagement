import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class EmployeeService {
  
  constructor(private httpClient: HttpClient,
                  ) { }

  createuser(res:any){
    return this.httpClient.post<any>("http://localhost:3000/posts", res)
    .pipe(map((res:any)=>{
      return res;
  }))
}
getAlluser(){
    return this.httpClient.get("http://localhost:3000/posts")
}
  deleteuser(user){
  return this.httpClient.delete("http://localhost:3000/posts/" +user.id)
  }
  updateuser(user){
    return this.httpClient.put("http://localhost:3000/posts/" +user.id,user)
  }

}
