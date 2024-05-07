import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Ticket } from "../models/ticket";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  public addTicket(ticket: Ticket, CID: number): Observable<any> {
    return this.http.post(`http://localhost:8081/Dance/ticket/add/${CID}`, ticket, { responseType: 'text' });
  }

  public updateTicket(TID: number, CID: number, ticket: Ticket): Observable<any> {
    return this.http.put(`http://localhost:8081/ticket/update/${TID}?CID=${CID}`, ticket, { responseType: 'text' });
  }
  purchaseTicket(ticket: Ticket): Observable<Ticket> {
    const url = "http://localhost:8081/Dance/ticket/Purchace";
    return this.http.post<Ticket>(url, ticket);
  }

  public getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>("http://localhost:8081/Dance/ticket/all");
  }

  public getTicketById(TID: number): Observable<Ticket> {
    return this.http.get<Ticket>(`http://localhost:8081/ticket/${TID}`);
  }

  public findByKeywordF(keyword: string): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`http://localhost:8081/ticket/search?keyword=${keyword}`);
  }

  public deleteTicket(TID: number): Observable<any> {
    return this.http.delete(`http://localhost:8081/ticket/delete/${TID}`, { responseType: 'text' });
  }
}
