import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Registration} from "../../../models/registration";
import {RegistrationService} from "../../../services/registration.service";

@Component({
  selector: 'app-registration-details',
  templateUrl: './registration-details.component.html',
  styleUrls: ['./registration-details.component.css']
})
export class RegistrationDetailsComponent implements OnInit{
  registration : Registration | undefined;

  constructor(private route: ActivatedRoute, private registrationService: RegistrationService) {}

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
