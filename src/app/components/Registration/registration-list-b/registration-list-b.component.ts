import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Registration} from "../../../models/registration";
import {RegistrationService} from "../../../services/registration.service";

@Component({
  selector: 'app-registration-list-b',
  templateUrl: './registration-list-b.component.html',
  styleUrls: ['./registration-list-b.component.css']
})
export class RegistrationListBComponent {
  registrations: Registration[] = [];

  constructor(private router: Router, private registrationService: RegistrationService) {}

  ngOnInit(): void {
    this.getRegistrations();
    console.log(this.registrations)
  }

  getRegistrations(): void {
    this.registrationService.getRegistrations().subscribe(
      (data: Registration[]) => {
        this.registrations = data;
      },
      (error) => {
        console.error('Error fetching registrations:', error);
        // Handle error appropriately
      }
    );
  }

  navigateToRegistrationDetail(RID: number): void {
    this.router.navigate(['/back/registration-details-b', RID]);
  }

  deleteRegistrationF(RID: number): void {
    if (window.confirm('Are you sure you want to delete this registration?')) {
      this.registrationService.deleteRegistration(RID).subscribe(
        () => {
          // Refresh the list after deletion
          this.getRegistrations();
        },
        (error) => {
          console.error('Error deleting registration:', error);
          // Handle error appropriately
        }
      );
    }
  }
}
