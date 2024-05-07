import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TicketService } from '../../../services/ticket.service';
import { Ticket } from '../../../models/ticket';
import {ActivatedRoute, Router} from "@angular/router";
import { TicketType } from 'src/app/models/ticket-type';
@Component({
  selector: 'app-ticket-add-b',
  templateUrl: './ticket-add-b.component.html',
  styleUrls: ['./ticket-add-b.component.css']
})
export class TicketAddBComponent {
  newTicket: Ticket = { TID :0  , price: 0, type: TicketType.SOLD , spectator: '',reservedseats:0, competitionid: 0,   competition: undefined};

  constructor(
    private ticketService: TicketService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(params => {
      this.newTicket.competitionid = +params['id'];
    });
  }

  addTicket(): void {
    this.ticketService.addTicket(this.newTicket, this.newTicket.competitionid).subscribe({
      next: (ticket) => {
        console.log('Ticket successful:', ticket);
        this.router.navigate(['/back/ticket-list-b']); // Navigate to a success page or back to list
      },
      error: (error) => {
        console.error('Error during ticket:', error);
        alert('Ticket failed'); // Display error notification
      }
    });
  }
  public cancelSubmit(){
    this.router.navigate(['/back/ticket-list-b']);
  }
}
