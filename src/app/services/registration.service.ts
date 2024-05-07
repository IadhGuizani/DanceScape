import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Registration} from "../models/registration";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private baseUrl = 'http://localhost:8081/Dance';
  constructor(private http:HttpClient) { }


  addRegistration(registration: Registration, CID: number): Observable<any> {
    const url = `${this.baseUrl}/registration/add/${CID}`;
    return this.http.post(url, registration, { responseType: 'text' }).pipe(
      catchError(error => {
        return throwError('Failed to add registration');
      })
    );
  }

  updateRegistration(RID: number, updatedRegistrationData: any): Observable<any> {
    return this.http.put(`http://localhost:8081/Dance/registration/update/${RID}`, updatedRegistrationData);
  }
  public getRegistrations(): Observable<Registration[]> {
    return this.http.get<Registration[]>(`${this.baseUrl}/registration/all`);
  }

  public  getRegistrationById(RID:number){
    return this.http.get("http://localhost:8081/Dance/registration/"+RID);
  }

  public  findByKeywordF(keyword:string):Observable<Registration[]>{
    return this.http.get<Registration[]>("http://localhost:8081/Dance/registration/search?keyword="+keyword);

  }

  public  deleteRegistration(RID:number){
    return this.http.delete("http://localhost:8081/Dance/registration/delete/"+RID);
  }

}
