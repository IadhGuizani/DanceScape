import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetitionService} from "../../../services/competition.service";
import { Competition} from "../../../models/competition";

@Component({
  selector: 'app-competition-details',
  templateUrl: './competition-details.component.html',
  styleUrls: ['./competition-details.component.css']
})
export class CompetitionDetailsComponent implements OnInit {
  competition: Competition | undefined;

  constructor(private route: ActivatedRoute, private competitionService: CompetitionService) {}

  ngOnInit(): void {
    this.getCompetitionDetails();

  }

  getCompetitionDetails(): void {
    const cid = Number(this.route.snapshot.paramMap.get('id'));
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
