import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }
  createuser(res:any){
    return this.httpClient.post<any>("http://localhost:3000/users", res)
    .pipe(map((res:any)=>{
      return res;
  }))
}
getAlluser(){
    return this.httpClient.get("http://localhost:3000/users")
}
  deleteuser(users){
  return this.httpClient.delete("http://localhost:3000/users/" +users.id)
  }
  updateuser(users){
    return this.httpClient.put("http://localhost:3000/users/" +users.id,users)
  }


  
  getbyid(users){
    return this.httpClient.get("http://localhost:3000/users/" +users.id)
  }
}


