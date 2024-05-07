import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }






  public addUser(u:User){
    return this.http.post(`http://localhost:8089/rev/user/addUserAndAssignToStructure`,u,{responseType:'text' as 'json'});
  }
  public modifyUser(u:User){
    return this.http.put("http://localhost:8089/rev/User/add",u,{responseType:'text' as 'json'});
  }
  public getUsers(){
    return this.http.get("http://localhost:8089/rev/User/all");
  }

  public  getUserById(UID:number){
    return this.http.get("http://localhost:8089/rev/User/"+UID);
  }

  public  findByKeywordF(keyword:string){
    return this.http.get<User[]>("http://localhost:8089/rev/User/search?keyword="+keyword);

  }
  public  deleteUser(UID:number){
    return this.http.delete("http://localhost:8089/rev/User/delete/"+UID);
  }
  updateUser(UID: number, updatedUserData: any): Observable<any> {
    return this.http.put(`http://localhost:8089/rev/User/update/${UID}`, updatedUserData);
  }
}
