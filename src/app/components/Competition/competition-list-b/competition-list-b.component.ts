import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { Competition} from "../../../models/competition";
import { HttpClient } from '@angular/common/http';
import { CompetitionService} from "../../../services/competition.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-competition-list-b',
  templateUrl: './competition-list-b.component.html',
  styleUrls: ['./competition-list-b.component.css']
})

export class CompetitionListBComponent implements OnInit {
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
    this.router.navigate(['back/competition-details-b/',cid]);
  }
  deleteCompetitionF(ID: number): void {
    if (window.confirm('Are you sure you want to delete this competition?')) {
      this.service.deleteCompetition(ID).subscribe(
        () => {
          // Refresh the list after deletion
          this.loadCompetitions();
        },
        (error) => {
          console.error('Error deleting competition:', error);
          // Handle error appropriately
        }
      );
    }
  }


}

