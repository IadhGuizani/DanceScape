// src/app/components/registration-add/registration-add.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RegistrationService} from "../../../services/registration.service";
import { Registration} from "../../../models/registration";

@Component({
  selector: 'app-registration-add',
  templateUrl: './registration-add.component.html',
  styleUrls: ['./registration-add.component.css']
})
export class RegistrationAddComponent {
  newRegistration: Registration = { rid :0  , dancername: '', competitionid: 0 };

  constructor(
    private registrationService: RegistrationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(params => {
      this.newRegistration.competitionid = +params['id'];
    });
  }

  addRegistration(): void {
    this.registrationService.addRegistration(this.newRegistration, this.newRegistration.competitionid).subscribe({
      next: (registration) => {
        console.log('Registration successful:', registration);
        this.router.navigate(['/front-office/registration-list']); // Navigate to a success page or back to list
      },
      error: (error) => {
        console.error('Error during registration:', error);
        alert('Registration failed'); // Display error notification
      }
    });
  }
  public cancelSubmit(){
    this.router.navigate(['/front-office/registration-list']);
  }
}
