import {Component, OnInit} from '@angular/core';
import {Ticket} from "../../../models/ticket";
import {ActivatedRoute} from "@angular/router";
import {TicketService} from "../../../services/ticket.service";

@Component({
  selector: 'app-ticket-details-b',
  templateUrl: './ticket-details-b.component.html',
  styleUrls: ['./ticket-details-b.component.css']
})
export class TicketDetailsBComponent implements OnInit{
  ticket: Ticket | undefined;

  constructor(private route: ActivatedRoute, private ticketService: TicketService) {}

  ngOnInit(): void {
    this.getTicketDetails();
  }

  getTicketDetails(): void {
    const tid = Number(this.route.snapshot.paramMap.get('TID'));
    this.ticketService.getTicketById(tid).subscribe(
      (data: any) => {
        this.ticket = data as Ticket;
      },
      (error) => {
        console.error('Error fetching ticket details:', error);
        // Handle error appropriately
      }
    );
  }
}
