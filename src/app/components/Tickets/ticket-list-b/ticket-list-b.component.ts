import { Component, OnInit } from '@angular/core';
import {Ticket} from "../../../models/ticket";
import {TicketService} from "../../../services/ticket.service";

@Component({
  selector: 'app-ticket-list-b',
  templateUrl: './ticket-list-b.component.html',
  styleUrls: ['./ticket-list-b.component.css']
})
export class TicketListBComponent {
  tickets: Ticket[] = [];  // Ensure this line exists

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.fetchTickets();
  }
  purchaseTicket(ticket: Ticket): void {
    this.ticketService.purchaseTicket(ticket).subscribe(updatedTicket => {
      // Mettre à jour le ticket dans la liste avec son nouvel état
      const index = this.tickets.findIndex(t => t.TID === updatedTicket.TID);
      if (index !== -1) {
        this.tickets[index] = updatedTicket;

      }
      this.fetchTickets();

    });
  }

  fetchTickets(): void {
    this.ticketService.getTickets().subscribe({
      next: (tickets) => this.tickets = tickets,
      error: (err) => console.error('Failed to fetch tickets:', err)
    });
  }
}
