import {Component, OnInit} from '@angular/core';
import {Competition} from "../../../models/competition";
import {ActivatedRoute} from "@angular/router";
import {CompetitionService} from "../../../services/competition.service";

@Component({
  selector: 'app-competition-details-b',
  templateUrl: './competition-details-b.component.html',
  styleUrls: ['./competition-details-b.component.css']
})
export class CompetitionDetailsBComponent implements OnInit{
  competition: Competition | undefined;

  constructor(private route: ActivatedRoute, private competitionService: CompetitionService) {}

  ngOnInit(): void {
    this.getCompetitionDetails();
  }

  getCompetitionDetails(): void {
    const cid = Number(this.route.snapshot.paramMap.get('CID'));
    this.competitionService.getCompetitionById(cid).subscribe(
      (data: any) => {
        this.competition = data as Competition;
      },
      (error) => {
        console.error('Error fetching competition details:', error);
        // Handle error appropriately
      }
    );
  }
}