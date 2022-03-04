import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
public AiUrl="http://localhost:3000/post/";

  constructor(private http:HttpClient) { }
// post data 
postData(data:any){
 return this.http.post<any>(this.AiUrl,data).pipe(map((res:any)=>{
   return res;
 }))
}
// get data
getData(){
  return this.http.get(this.AiUrl).pipe(map((res:any)=>{
    return res;
  }))
}
// delete
deleteData(id:number){
  return this.http.delete<any>(this.AiUrl+id)
  .pipe(map((res:any)=>{
return res;
  }))
}
// put update user data
putData(data:any,id:number){
  return this.http.put(this.AiUrl+id , data ).pipe(map((res:any)=>{
    return res;
  }))
}
}
