import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { Competition} from "../../../models/competition";
import { HttpClient } from '@angular/common/http';
import { CompetitionService} from "../../../services/competition.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css']
})

export class CompetitionListComponent implements OnInit {
  searchCriteria: string = '';
  searchResults: Competition[] = [];
  noMatchingResults: boolean = false;
  competitions: Competition[]=[];
  keywordF: any;

  constructor(private http: HttpClient, private router: Router, private service: CompetitionService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadCompetitions();
  }
  loadCompetitions() {
    this.service.getCompetitions().subscribe(
      (competitions: Competition[]) => {
        this.competitions = competitions;
        console.log('Competitions:', competitions);// Log the competitions to verify data retrieval
      },
      (error) => {
        console.error('Error fetching competitions:', error);
        // Handle error appropriately
      }
    );
  }
  public findByKeywordF() {
    let resp = this.service.findByKeywordF(this.keywordF)
    resp.subscribe((data) => this.competitions = data);
  }

  navigateToCompetitionDetail(cid: number) {
    this.router.navigate(['front-office/competition-details/',cid]);
  }



}

