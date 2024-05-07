import {Component, OnInit} from '@angular/core';
import {Registration} from "../../../models/registration";
import {ActivatedRoute} from "@angular/router";
import {RegistrationService} from "../../../services/registration.service";

@Component({
  selector: 'app-registration-details-b',
  templateUrl: './registration-details-b.component.html',
  styleUrls: ['./registration-details-b.component.css']
})
export class RegistrationDetailsBComponent implements OnInit{

  constructor(private route: ActivatedRoute, private registrationService: RegistrationService) {}

  registration : Registration | undefined;


  ngOnInit(): void {
    this.getRegistrationDetails();
  }

  getRegistrationDetails(): void {
    const rid = Number(this.route.snapshot.paramMap.get('RID'));
    this.registrationService.getRegistrationById(rid).subscribe(
      (data: any) => {
        this.registration = data as Registration;
      },
      (error) => {
        console.error('Error fetching registration details:', error);
        // Handle error appropriately
      }
    );
  }
}
