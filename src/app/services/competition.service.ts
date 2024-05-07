import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Competition } from '../models/competition';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private baseUrl = 'http://localhost:8081/Dance';

  constructor(private http: HttpClient) { }

  public addCompetition(competition: Competition): Observable<any> {
    return this.http.post(`${this.baseUrl}/competition/add`, competition, { responseType: 'json' });
  }

  public updateCompetition(CID: number, updatedCompetitionData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/competition/update/${CID}`, updatedCompetitionData);
  }

  getCompetitions(): Observable<Competition[]> {
    return this.http.get<Competition[]>(`${this.baseUrl}/competition/all`);
  }

  public getCompetitionById(cid: number): Observable<Competition> {
    return this.http.get<Competition>(`${this.baseUrl}/competition/${cid}`);
  }

  public findByKeywordF(keyword: string): Observable<Competition[]> {
    return this.http.get<Competition[]>(`${this.baseUrl}/search?keyword=${keyword}`);
  }

  public deleteCompetition(CID: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/competition/delete/${CID}`);
  }
}
