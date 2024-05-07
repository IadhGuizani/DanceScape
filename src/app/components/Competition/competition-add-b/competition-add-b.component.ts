import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CompetitionService } from '../../../services/competition.service';
import { Competition } from '../../../models/competition';
import {Router} from "@angular/router";

@Component({
  selector: 'app-competition-add-b',
  templateUrl: './competition-add-b.component.html',
  styleUrls: ['./competition-add-b.component.css']
})
export class CompetitionAddBComponent implements OnInit {
  competitionForm!: FormGroup;
  message: any;

  constructor( private router: Router,
    private formBuilder: FormBuilder,
    private competitionService: CompetitionService
  ) {}

  ngOnInit(): void {
    this.competitionForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      date: ['', [Validators.required]],
      venue: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required]],
      maxregistrations: ['', [Validators.required]],

    });
  }

  onSubmit(): void {
    if (this.competitionForm.valid) {
      const competitionData: Competition = this.competitionForm.value;
      console.log('Submitting data:', competitionData);
      let resp = this.competitionService.addCompetition(competitionData);
      resp.subscribe(
        (data) => this.message = data);
      this.router.navigate(['/front-office/competition-list']).then(() => {
        window.location.reload();
      })
    }
  }
  public cancelSubmit(){
    this.router.navigate(['/front-office/competition-list']);
  }

}
